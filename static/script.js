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
        document.getElementById("message").textContent = data.message;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
