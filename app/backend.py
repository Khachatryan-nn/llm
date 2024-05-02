from fastapi import FastAPI, Request, Form
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mounting the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Define the initial message endpoint
@app.get("/")
async def initial_message():
    return {"message": "Initial message from the server"}

# Define the submit link endpoint
@app.post("/")
async def submit_link(link: str = Form(...)):
    # Perform any processing on the submitted link if needed
    # For now, just return a response with a message
    return JSONResponse(content={"message": f"Link submitted: {link}"})