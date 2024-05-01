async function displayInitialMessage() {
    try {
        const response = await fetch("/");
        const data = await response.json();
        document.getElementById("message").textContent = data.message;
        document.getElementById("message").style.display = "block"; // Show the message element
    } catch (error) {
        console.error('Error parsing JSON from response:', error);
        const responseText = await response.clone().text(); // Get the raw text of the response body
        console.log('Received the following instead of valid JSON:', responseText);
    }
}

document.getElementById("linkForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    var link = document.getElementById("linkInput").value;
	console.log(link)
    
    try {
        const response = await fetch("/", {
            method: "POST",
            headers: {
				"Content-Type": "application/json", // Set content type to JSON
			},
			body: JSON.stringify({
				link: link,
			}),
        });
        const data = await response.json();
		console.log(data.message)
        
        var messageElement = document.getElementById("message");
        messageElement.innerHTML = "<p>" + data.message + "</p>";
        messageElement.style.display = "block"; // Show the message element
    } catch (error) {
        console.error('Error parsing JSON from response:', error);
        const responseText = await response.clone().text(); // Get the raw text of the response body
        console.log('Received the following instead of valid JSON:', responseText);
    }
});

window.onload = displayInitialMessage;
