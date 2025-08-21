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
    let next = document.querySelector("#next");

    next.style.display = "none";
    /**@type {HTMLInputElement} */
    let fontInput = document.querySelector("#font-input");

    let fontNumber = Math.floor(Math.random() * quizFonts.length)
    prompt.style.fontFamily = quizFonts[fontNumber];
    form.addEventListener("submit", function(event) {

        if (!fontInput.value)
        {
            result.style.color = "black";
            result.innerHTML = "Please type an answer."
        }
        else if (fontInput.value == quizFonts[fontNumber])
        {
            result.style.color = "green";
            result.innerHTML = "Correct!"
            next.style.display = "auto";
        }
        else
        {
            result.style.color = "red";
            result.innerHTML = "Incorrect";
        }
        event.preventDefault();
    });

    next.addEventListener("click", function() {
        fontNumber = Math.floor(Math.random() * quizFonts.length)
        prompt.style.fontFamily = quizFonts[fontNumber];
        fontInput.value = "";
        result.innerHTML = "";
        next.style.hidden = true;
    });
});