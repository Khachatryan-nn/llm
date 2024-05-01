document.getElementById("linkForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var link = document.getElementById("linkInput").value;
    
    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            link: link,
        }),
    })
    .then(response => response.json())
    .then(data => {
        var messageElement = document.getElementById("message");
        messageElement.textContent = data.message;
        messageElement.style.display = "block"; // Show the message element
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
