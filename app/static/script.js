// Function to handle form submission
document.getElementById("linkForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    var link = document.getElementById("linkInput").value;
    
    const response = await fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            link: link,
        }),
    });
    
    if (response.ok) {
        const data = await response.json(); // Parse response as JSON
        document.getElementById("message").innerHTML = data.message; // Set message content
        document.getElementById("message").style.display = "block"; // Show the message element
    } else {
        console.error('Error:', response.status);
    }
});

// Call the function to display the initial message when the page loads
window.onload = displayInitialMessage;
