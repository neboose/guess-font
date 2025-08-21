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

    /**@type {HTMLInputElement} */
    let fontInput = document.querySelector("#font-input");
    fontNumber = Math.floor(Math.random() * quizFonts.length)
    prompt.style.fontFamily = quizFonts[fontNumber];
    form.addEventListener("submit", function(event) {

        if (!fontInput.value)
        {
            result.innerHTML = "Please type an answer."
        }
        else if (fontInput.value == quizFonts[fontNumber])
        {
            result.style.color = "green";
            result.innerHTML = "Correct!"
        }
        else
        {
            result.style.color = "red";
            result.innerHTML = "Incorrect";
        }
        alert(`${quizFonts[fontNumber]}, you typed: ${fontInput.value}`);
        event.preventDefault();
    });
});