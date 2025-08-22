let streak = 0;

const quizFonts = [
    ["Times Roman", "Times New Roman"],
    ["Arial"],
    ["Verdana"],
    ["Courier New"],
    ["Georgia"],
    ["Comic Sans MS", "Comic Sans"]
]

document.addEventListener("DOMContentLoaded", function() {

    /**@type {HTMLElement} */
    let prompt = document.querySelector("#prompt");
    let form = document.querySelector("form");
    let result = document.querySelector("#result");
    let next = document.querySelector("#next");
    let streakText = document.querySelector("#streak");

    next.style.display = "none";
    /**@type {HTMLInputElement} */
    let fontInput = document.querySelector("#font-input");

    let fontNumber = Math.floor(Math.random() * quizFonts.length)
    prompt.style.fontFamily = quizFonts[fontNumber][0];
    streakText.innerHTML = "Streak: " + streak;
    form.addEventListener("submit", function(event) {
        let incorrect = false;
        if (!fontInput.value)
        {
            result.style.color = "black";
            result.innerHTML = "Please type an answer."
        }
        else if (quizFonts[fontNumber].some(font => font.toLowerCase() === fontInput.value.toLowerCase()))
        {
            result.style.color = "green";
            result.innerHTML = "Correct!"
            next.style.display = "inline-block";
            form.style.display = "none";
            if (!incorrect) 
            {
                streak++;
            }
            streakText.innerHTML = "Streak: " + streak;
        }
        else
        {
            result.style.color = "red";
            result.innerHTML = "Incorrect";
            streak = 0;
            streakText.innerHTML = "Streak: " + streak;
            incorrect = true;
        }
        event.preventDefault();
    });

    next.addEventListener("click", function() {
        let lastFontNumber = fontNumber;
        fontNumber = Math.floor(Math.random() * quizFonts.length);
        if (fontNumber == lastFontNumber)
        {
            fontNumber++;
        }
        prompt.style.fontFamily = quizFonts[fontNumber][0];
        fontInput.value = "";
        result.innerHTML = "";
        next.style.display = "none";
        form.style.display = "block";
        fontInput.focus();
    });
});