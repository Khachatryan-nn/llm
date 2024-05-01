from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mounting the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Dummy function to simulate LLM model output
def generate_message(link_length):
    return f"Hello, the length of the link is {link_length}."

@app.get("/")
async def read_item():
    with open("/var/www/html/index.html", "r") as file:
        html_content = file.read()
    initial_message = generate_message(0)  # Initial message with link length 0
    html_content = html_content.replace('{{ initial message }}', initial_message)
    return HTMLResponse(content=html_content)

@app.post("/", response_model=dict)
async def generate_response(link: str = Form(...)):
    link_length = len(link)
    message = generate_message(link_length)
    return JSONResponse(content={"message": message})
