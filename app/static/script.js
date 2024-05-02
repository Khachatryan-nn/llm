async function displayInitialMessage() {
    try {
        const response = await fetch("/");
        const data = await response.json();
        displayMessage(data.message);
    } catch (error) {
        console.error('Error fetching initial message:', error);
    }
}

async function handleSubmit(event) {
    event.preventDefault();
    const link = document.getElementById("linkInput").value;
    console.log('Link:', link);
    
    try {
        const response = await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ link }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit link');
        }

        const data = await response.json();
        console.log('Response data:', data);
        displayMessage(data.message);
    } catch (error) {
        console.error('Error submitting link:', error);
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = `<p>${message}</p>`;
    messageElement.style.display = "block";
}

document.getElementById("linkForm").addEventListener("submit", handleSubmit);
window.onload = displayInitialMessage;
