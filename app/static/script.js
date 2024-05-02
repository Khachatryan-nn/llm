async function displayInitialMessage() {
    try {
        const response = await fetch("/");
        const data = await response.text();  // Parse as text
        displayMessage(data);
    } catch (error) {
        console.error('Error fetching initial message:', error);
    }
}

async function handleSubmit(event) {
    event.preventDefault();
    const link = document.getElementById("linkInput").value;
    console.log('Link:', link);

    try {
        const formData = new URLSearchParams({ link });
        const response = await fetch("/", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to submit link');
        }

        const data = await response.json();
        console.log('Response data:', data);
        const messageElement = document.getElementById("message");
        messageElement.textContent = data.message;  // Update text content
        messageElement.style.display = "block";
    } catch (error) {
        console.error('Error submitting link:', error);
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;  // Update text content
    messageElement.style.display = "block";
}

document.getElementById("linkForm").addEventListener("submit", handleSubmit);
window.onload = displayInitialMessage;
