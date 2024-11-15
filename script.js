 let user1Button = document.querySelector(".btn1");
let user2Button = document.querySelector(".btn2");
let holdButton1 = document.querySelector(".holdbutton1");
let holdButton2 = document.querySelector(".holdbutton2");
let score1Element = document.querySelector(".score1");
let score2Element = document.querySelector(".score2");
let curScore1Element = document.querySelector(".curScore1");
let curScore2Element = document.querySelector(".curScore2");
let user1 = document.querySelector(".user1");
let user2 = document.querySelector(".user2");

let score1 = 0;
let score2 = 0;
let currentScore1 = 0;
let currentScore2 = 0;


user1Button.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    currentScore1 += randomNumber;
    curScore1Element.textContent = currentScore1;
});


holdButton1.addEventListener("click", function () {
    score1 += currentScore1;
    score1Element.textContent = score1;
    currentScore1 = 0;
    curScore1Element.textContent = currentScore1;

    if (score1 >= 100) {
        alert("User 1 wins!");
        resetGame();
    } else {
        switchTurn();
    }
});

user2Button.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    currentScore2 += randomNumber;
    curScore2Element.textContent = currentScore2;
});

holdButton2.addEventListener("click", function () {
    score2 += currentScore2;
    score2Element.textContent = score2;
    currentScore2 = 0;
    curScore2Element.textContent = currentScore2;

    if (score2 >= 100) {
        alert("User 2 wins!");
        resetGame();
    } else {
        switchTurn();
    }
});


function switchTurn() {
    if (!user1Button.disabled) {
        user1Button.disabled = true;
        holdButton1.disabled = true;
        user2Button.disabled = false;
        holdButton2.disabled = false;
        user1.classList.remove("bg_color");
        user2.classList.add("bg_color");
    } else {
        user1Button.disabled = false;
        holdButton1.disabled = false;
        user2Button.disabled = true;
        holdButton2.disabled = true;
        user1.classList.add("bg_color");
        user2.classList.remove("bg_color");
    }
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    currentScore1 = 0;
    currentScore2 = 0;
    curScore1Element.textContent = "0";
    curScore2Element.textContent = "0";
    score1Element.textContent = "0";
    score2Element.textContent = "0";
    user1Button.disabled = false;
    holdButton1.disabled = false;
    user2Button.disabled = true;
    holdButton2.disabled = true;
    user1.classList.add("bg_color");
    user2.classList.remove("bg_color");
}