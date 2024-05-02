from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mounting the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

def generate_message(link_length):
    return f"Hello, the length of the link is {link_length}."

@app.get("/", response_class=HTMLResponse)
async def read_item():
    with open("/var/www/html/app/index.html", "r") as file:
        html_content = file.read()
    initial_message = generate_message(0)  # Initial message with link length 0
    html_content = html_content.replace('<!--INITIAL_MESSAGE-->', initial_message)
    return HTMLResponse(content=html_content)

@app.post("/")
async def generate_response(link: str = Form(...)):
    try:
        link_length = len(link)
        message = generate_message(link_length)
        return JSONResponse(content={"message": message})
    except Exception as e:
        return JSONResponse(content={"error": str(e)})
