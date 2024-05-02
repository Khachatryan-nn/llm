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
  
	  const data = await response.text();  // Parse as text, assuming backend sends a string
	  console.log('Response data:', data);
	  const messageElement = document.getElementById("message");
	  messageElement.textContent = data;  // Update text content with entire response
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
