function submitLink() {
    var link = document.getElementById("linkInput").value;
    var message = document.getElementById("message");
    
    // Calculate the length of the link
    var linkLength = link.length;
    
    // Display the message
    message.textContent = "Hello, " + linkLength;
}
