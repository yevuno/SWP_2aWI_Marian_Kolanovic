
//const theoretisch auch möglich
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.34;

let bananaAverageKg = 0.22;
let appleAverageKg = 0.34;

// 17 Bananen
document.querySelector(".bananaOne").innerHTML = document.getElementById("17").id * bananaAverageKg * bananaPricePerKilo + "€";

// 8 Äpfel
document.querySelector(".appleOne").innerHTML = document.getElementById("8").id * appleAverageKg * applePricePerKilo + "€";

// Eine Tonne Bananen
document.getElementById("oneTonOfBananas").innerHTML = 1000 * bananaPricePerKilo + "€";
document.getElementById("oneTonOfApples").innerHTML = 1000 * applePricePerKilo + "€";

