from fastapi import FastAPI, Request, Form
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mounting the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Dummy function to simulate LLM model output
def generate_message(link_length):
    return f"Hello, the length of the link is {link_length}."

# Define new GET and POST endpoints
@app.get("/initial-message", response_class=JSONResponse)
async def get_initial_message():
    initial_message = generate_message(0)
    return {"message": initial_message}

@app.post("/submit-link", response_class=JSONResponse)
async def submit_link(link: str = Form(...)):
    link_length = len(link)
    message = generate_message(link_length)
    return {"message": message}
