const quizFonts = [
    "Times Roman",
    "Arial",
    "Verdana"
]

document.addEventListener("DOMContentLoaded", function() {

    /**@type {HTMLElement} */
    let prompt = document.querySelector("#prompt");
    let form = document.querySelector("form");
    prompt.style.fontFamily = quizFonts[Math.floor(Math.random() * quizFonts.length)];
});