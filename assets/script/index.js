const userNumber = document.getElementById("userNumber");
const Btn = document.getElementById("button");
const Reload = document.getElementById("reload");
const userGuess = document.getElementById('userGuessValue');
const previousMatchedGuess = document.getElementById('previousGuessValue');
const img = document.getElementById("image");
const triesValue = document.getElementById("triesValue");
let leftNumbers = +triesValue.innerText;
const previousMatchedGuessValue = [];
const previousGuess = [];
let regx = /[0-9]/;
Btn.addEventListener("click", function () {
    if (leftNumbers > 0) {
        if (regx.test(+userNumber.value) && +userNumber.value < 10 && +userNumber.value >= 0) {
            num = Math.floor(Math.random() * 10);
            previousGuess + previousGuess.push(`${+userNumber.value}`);
            userGuess.innerText = previousGuess;
            if (+userNumber.value === num) {
                img.classList.add("show");
                leftNumbers = leftNumbers + 1;
                previousMatchedGuessValue + previousMatchedGuessValue.push(`${userNumber.value}`);
                previousMatchedGuess.innerText = previousMatchedGuessValue;

            } else {
                img.classList.remove("show");
                leftNumbers = leftNumbers - 1;
            }
            triesValue.innerText = `${+leftNumbers}`;
        }
        else {
            window.alert("wrong input");

        }

    } else {
        window.alert("your try number completed:");
    }
});

Reload.addEventListener("click", function () {
    window.location.reload();
});