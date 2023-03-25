//? Task 1

function showModal() {
    const list = document.getElementById("list");
    const items = list.getElementsByTagName("li");
    const output = document.getElementById("output");
    output.innerText = `${items[0].innerText}, ${items[items.length - 1].innerText}, ${items[1].innerText}, ${items[3].innerText}, ${items[2].innerText}`;
    const modal = document.getElementById("modal");
    modal.style.display = "block";
};

function hideModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
};

//? Task 2

const myDiv = document.getElementById("myDiv");
const myList = document.getElementById("myList");
const span = document.querySelector("span");

