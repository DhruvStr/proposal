function sendResponse(choice) {
    // Save the response to localStorage
    localStorage.setItem("userResponse", choice);

    // Redirect based on the choice
    if (choice === "yes") {
        window.location.href = "yes.html";
    } else {
        window.location.href = "friends.html";
    }
}

function displayResponse() {
    const response = localStorage.getItem("userResponse");

    if (response) {
        const responseContainer = document.getElementById("response-container");
        responseContainer.innerHTML = `<h2>Her answer: <span style="color: ${
            response === "yes" ? "pink" : "lightblue"
        };">${response === "yes" ? "YES 💖" : "Let's Be Friends 😊"}</span></h2>`;
    } else {
        alert("No response recorded yet.");
    }
}
