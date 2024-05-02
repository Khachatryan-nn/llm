from fastapi import FastAPI, Request, Form
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
import sys

app = FastAPI()

# Define the initial message endpoint
@app.get("/")
async def initial_message():
    data = {"message": "Initial message from the server"}
    return JSONResponse(content=data)

# Define the submit link endpoint
@app.post("/")
async def submit_link(link: str = Form(...)):
    data = {"message": f"Link submitted: {link}"}
    # Implement your link processing logic here
    return JSONResponse(content=data)

# Mount static files at a dedicated route
app.mount("/static", StaticFiles(directory="static"), name="static")