let randomColor = "#000000";

document.addEventListener("DOMContentLoaded", function() {
    let randomColor = parseInt(Math.random() * 0xffffff).toString(16);
    randomColor = "#" + "0".repeat(6 - randomColor.length) + randomColor;
    console.log(randomColor);
    let gameColor = document.querySelector("#gameColor");
    gameColor.style.backgroundColor = randomColor;
});

function closeMenu() {
    let menu = document.querySelector(".playSettings");
    menu.style.display = "none";
}

function easyMode() {
    let easy = document.querySelector(".easy");
    easy.style.display = "block";
    let hard = document.querySelector(".hard");
    hard.style.display = "none";
    closeMenu();

 
}


function hardMode() {
    let easy = document.querySelector(".easy");
    easy.style.display = "none";
    let hard = document.querySelector(".hard");
    hard.style.display = "block";
    closeMenu();
}