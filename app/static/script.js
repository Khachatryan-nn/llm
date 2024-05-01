async function displayInitialMessage() {
    const response = await fetch("/");
    const clonedResponse = response.clone(); // Clone the response before consuming it
    try {
        const data = await response.json();
        document.getElementById("message").textContent = data.message;
        document.getElementById("message").style.display = "block"; // Show the message element
    } catch (error) {
        const responseText = await clonedResponse.text(); // Get the raw text of the response body
        console.log('Received the following instead of valid JSON:', responseText);
        console.error('Error parsing JSON from response:', error);
    }
}


document.getElementById("linkForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const link = document.getElementById("linkInput").value;
    console.log(link);
    
    const response = await fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({
            link: link,
        }),
    });
    console.log(response);
    try {
        const data = await response.json();
		console.log(data);
        
        var messageElement = document.getElementById("message");
        messageElement.innerHTML = "<p>" + data.message + "</p>";
        messageElement.style.display = "block"; // Show the message element
    } catch (error) {
        console.error('Error parsing JSON from response:', error);
    }
});

window.onload = displayInitialMessage;
