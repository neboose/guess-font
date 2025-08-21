const quizFonts = [
    "Times Roman",
    "Arial",
    "Verdana"
]

document.addEventListener("DOMContentLoaded", function() {

    /**@type {HTMLElement} */
    let prompt = document.querySelector("#prompt");
    let form = document.querySelector("form");
    let result = document.querySelector("#result");
    prompt.style.fontFamily = quizFonts[Math.floor(Math.random() * quizFonts.length)];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});