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
  
	  const responseData = await response.json();
	  const message = responseData.message;
	  console.log('Response message:', message);
  
	  const messageElement = document.getElementById("message");
	  messageElement.innerHTML = message; // Update HTML content with message
	  messageElement.style.display = "block";
	} catch (error) {
	  console.error('Error submitting link:', error);
	}
  }

document.getElementById("linkForm").addEventListener("submit", handleSubmit);
