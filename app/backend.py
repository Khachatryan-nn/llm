from fastapi import FastAPI, Form, Depends, TemplateResponse
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mounting the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Dummy function to simulate LLM model output
def generate_message(link_length):
    return f"""Hello, the length of the link is {link_length}.\nThanks for using our services!""".replace("\n", "<br>")

@app.get("/")
async def root():
    initial_message = generate_message(0)  # Initial message with link length 0
    return JSONResponse(content={"message": initial_message})

@app.post("/")
async def generate_response(link: str = Form(...)):
    link_length = len(link)
    message = generate_message(link_length)
    return JSONResponse(content={"message": message})