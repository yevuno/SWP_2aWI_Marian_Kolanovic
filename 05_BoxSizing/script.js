let paddingSelector = document.querySelector(".universal-range");
console.log(paddingSelector.value);

let box = document.querySelector(".universal-box");

let displayNumber = document.querySelector(".universal-selectedNumber");

function changePadding() {
    box.style.padding = paddingSelector.value + "px";
    displayNumber.innerHTML = paddingSelector.value;
    box.style.boxSizing = document.querySelector("#selectedBox").value;
}
