from fastapi import FastAPI, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
#import requests
#from bs4 import BeautifulSoup

app = FastAPI()

# Allowing CORS for all origins, you might want to restrict it in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class URLInput(BaseModel):
    url: str

@app.post("/")
async def analyze_webpage(url: str = Form(...)):
    try:
        # Fetching webpage content
        # Here you can add your own logic to process the webpage content
        # For demonstration purposes, let's just return the URL
        return {"url": url}
    except Exception as e:
        # Returning error message if any exception occurs
        return {"error": str(e)}