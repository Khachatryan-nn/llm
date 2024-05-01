from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mounting the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Dummy function to simulate LLM model output
def generate_message(link_length):
    return f"Hello, the length of the link is {link_length}.\nThanks for using our services!"

@app.get("/")
async def read_item():
    with open("/var/www/html/app/index.html", "r") as file:
        html_content = file.read()
    initial_message = generate_message(0)  # Initial message with link length 0
    html_content = html_content.replace('{{ initial message }}', initial_message)
    return HTMLResponse(content=html_content)

@app.post("/")
async def generate_response(request: Request):
    form_data = await request.form()
    link = form_data.get("link")
    if link is None:
        return JSONResponse({"error": "Link not provided"}, status_code=400)
    
    #link_length = len(link)
    #message = generate_message(link_length)
    message = "Hello, the length of the link is 10.\nThanks for using our services!"
    return JSONResponse(content={"message": message})
