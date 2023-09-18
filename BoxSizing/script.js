let paddingSelector  = document.querySelector(".paddingSelector");
console.log(paddingSelector.value)

let box = document.querySelector(".Box");

let displayNumber = document.querySelector(".selectedNumber")

function changePadding() {
    box.style.padding = paddingSelector.value + "px";
    displayNumber.innerHTML = paddingSelector.value;
    box.style.boxSizing = document.querySelector("#selectedBox").value;
}