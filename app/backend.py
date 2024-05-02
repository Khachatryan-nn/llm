from fastapi import FastAPI, Request, Form
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Define the initial message endpoint
@app.get("/")
async def initial_message():
    data = {"message": "Initial message from the server"}
    print(data)  # Print the data to verify its structure
    return JSONResponse(content=data)

# Define the submit link endpoint
@app.post("/")
async def submit_link(link: str = Form(...)):
    data = {"message": f"Link submitted: {link}"}
    print(data)  # Print the data to verify its structure
    # Implement your link processing logic here
    return JSONResponse(content=data)

# Mount static files at a dedicated route
app.mount("/static", StaticFiles(directory="static"), name="static")