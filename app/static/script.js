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
  
        const responseData = await response.json();  // Parse response as JSON
        const message = responseData.message;  // Extract message from response
        console.log('Response message:', message);
        
        const messageElement = document.getElementById("message");
        messageElement.innerHTML = message;  // Update HTML content with message
        messageElement.style.display = "block";
    } catch (error) {
        console.error('Error submitting link:', error);
    }
}
  

//function displayMessage(messageData) {
//    const messageElement = document.getElementById("message");
//    messageElement.textContent = messageData.message.replace(/<br>/g, "\n");
//    messageElement.style.display = "block";
//}

document.getElementById("linkForm").addEventListener("submit", handleSubmit);
