let streak = 0;

const quizFonts = [
    ["Times Roman", "Times New Roman"],
    ["Arial"],
    ["Verdana"],
    ["Courier New"],
    ["Georgia"],
    ["Comic Sans MS", "Comic Sans"],
    ["Rockwell"],
    ["Wingdings"],
    ["Webdings"],
    ["Impact"],
    ["Papyrus"]
]

document.addEventListener("DOMContentLoaded", function() {

    /**@type {HTMLElement} */
    let prompt = document.querySelector("#prompt");
    let mainForm = document.querySelector("#main-form");
    let result = document.querySelector("#result");
    let next = document.querySelector("#next");
    let streakText = document.querySelector("#streak");
    let autoNext = document.querySelector("#auto-next");

    next.style.display = "none";
    /**@type {HTMLInputElement} */
    let fontInput = document.querySelector("#font-input");

    let fontNumber = Math.floor(Math.random() * quizFonts.length);
    let incorrect = false;
    prompt.style.fontFamily = quizFonts[fontNumber][0];
    streakText.innerHTML = "Streak: " + streak;

    function newFont() 
    {
        let lastFontNumber = fontNumber;
        fontNumber = Math.floor(Math.random() * quizFonts.length);
        if (fontNumber == lastFontNumber)
        {
            if (fontNumber != quizFonts.length) 
            {
                fontNumber++;
            }
            else 
                {
                fontNumber = 0;
            }
        }
        prompt.style.fontFamily = quizFonts[fontNumber][0];
        fontInput.value = "";
        result.innerHTML = "";
        next.style.display = "none";
        mainForm.style.display = "block";
        fontInput.focus();
        incorrect = false;
    }

    mainForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!fontInput.value)
        {
            result.style.color = "black";
            result.innerHTML = "Please type an answer.";
        }
        else if (quizFonts[fontNumber].some(font => font.toLowerCase() === fontInput.value.toLowerCase()))
        {
            if (!autoNext.checked) 
            {
                result.style.color = "green";
                result.innerHTML = "Correct!";
                next.style.display = "inline-block";
                mainForm.style.display = "none";
            }
            if (!incorrect) 
            {
                streak++;
            }
            streakText.innerHTML = "Streak: " + streak;
            if (autoNext.checked)
            {
                alert(`AutoNext is checked!`);
                newFont();
            }
        }
        else
        {
            result.style.color = "red";
            result.innerHTML = "Incorrect";
            streak = 0;
            streakText.innerHTML = "Streak: " + streak;
            incorrect = true;
        }
    });

    next.addEventListener("click", newFont)
});