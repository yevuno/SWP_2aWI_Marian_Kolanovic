const data1 = "14,3,12,8,9,11,4,3,2,4";

// Zähle jede 2te Zahl zusammen 

let arr1 = data1.split(",");
let sum1 = 0;

for (let i = 0; i < arr1.length; i += 2) {
    sum1 += Number(arr1[i]);
}
console.log("Ergebnis Aufgabe 1: " + sum1);



const data2 = "Hans ist ein netter Kerl H";

// Gib obigen Text aus 

// Lösche folgende Buchstaben; a e 

// Vervierfache folgende Buchstaben: H 

// HHHHns ist in nttr Krl HHHH 

let arr2 = data2.split("");

for (i = 0; i < arr2.length; i++) {
    if (arr2[i] === "a" || arr2[i] === "e") {
        arr2.splice(i, 1);
        i--;
    } else if (arr2[i] === "H") {
        arr2[i] = "HHHH";
    }
}
console.log("Ergebnis Aufgabe 2: " + arr2.join(""));



const data3 = "4,9,-3,-9,-5,10,2,1,14";


// NImm alle positiven Zahlen und berechne den Mittelwert 

// Ausserdem gib die Summe der negativen Zahlen aus 

// 

let arr3 = data3.split(",");
let sumPositive = 0;
let countPositive = 0;
let countNegative = 0;
let sumNegative = 0;


for (let i = 0; i < arr3.length; i++) {
    if (Number(arr3[i]) > 0) {
        sumPositive += Number(arr3[i]);
        countPositive++;
    }
    if (Number(arr3[i]) < 0) {
        sumNegative += Number(arr3[i]);
        countNegative++;
    }

}

console.log("Ergebnis Aufgabe 3 Positiv: " + sumPositive / countPositive);
console.log("Ergebnis Aufgabe 3 Negativ: " + sumNegative / countNegative);
