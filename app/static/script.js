// Function to fetch and display the initial message
async function displayInitialMessage() {
    const response = await fetch("/");
    const data = await response.json();
    document.getElementById("message").textContent = data.message;
    document.getElementById("message").style.display = "block"; // Show the message element
}

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
        const data = await response.text(); // Get response as text
        document.getElementById("message").innerHTML = data; // Set response as HTML
        document.getElementById("message").style.display = "block"; // Show the message element
    } else {
        console.error('Error:', response.status);
    }
});

// Call the function to display the initial message when the page loads
window.onload = displayInitialMessage;
