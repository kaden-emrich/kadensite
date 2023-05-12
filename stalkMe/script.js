var emailButton = document.getElementById("emailButton");

function copyEmail() {
    navigator.clipboard.writeText("kadenemrich@gmail.com");
    emailButton.innerText = "COPIED!";

    setTimeout(function() {
        emailButton.innerText = "Copy My Email";
    }, 1000);
}