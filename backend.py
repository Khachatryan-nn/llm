from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()

# Mounting the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Dummy function to simulate LLM model output
def generate_message(link_length):
    return f"""Hello, the length of the link is {link_length}. 
Certainly! Let's refine the design further to make it even better. We can add subtle gradients, adjust the colors, and refine the shadow to enhance the modern and minimalistic appearance. Here's an updated version of your CSS:
We can add subtle gradients, adjust the colors, and refine the shadow to enhance the modern and minimalistic appearance. Here's an updated version of your CSS:
We can add subtle gradients, adjust the colors, and refine the shadow to enhance the modern and minimalistic appearance. Here's an updated version of your CSS:
We can add subtle gradients, adjust the colors, and refine the shadow to enhance the modern and minimalistic appearance. Here's an updated version of your CSS:
We can add subtle gradients, adjust the colors, and refine the shadow to enhance the modern and minimalistic appearance. Here's an updated version of your CSS:
We can add subtle gradients, adjust the colors, and refine the shadow to enhance the modern and minimalistic appearance. Here's an updated version of your CSS:
We can add subtle gradients, adjust the colors, and refine the shadow to enhance the modern and minimalistic appearance. Here's an updated version of your CSS:""".replace("\n", "<br>")

@app.get("/")
async def read_item():
    with open("/var/www/html/index.html", "r") as file:
        html_content = file.read()
    initial_message = generate_message(0)  # Initial message with link length 0
    html_content = html_content.replace('{{ initial message }}', initial_message)
    return HTMLResponse(content=html_content)

@app.post("/")
async def generate_response(link: str = Form(...)):
    link_length = len(link)
    message = generate_message(link_length)
    return JSONResponse(content={"message": message})
