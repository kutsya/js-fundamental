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
const header = document. querySelector("h1");
const myDiv = document.getElementById("myDiv");

const firstParagraph =  document.querySelector(".first");
const secondParagraph =  document.querySelector(".second");
const thirdParagraph =  document.querySelector(".third");
const fourthParagraph =  document.querySelector(".fourth");

const myList = document.getElementById("myList");
const span = document.querySelector("span");

header.style.backgroundColor = '#34d399';

firstParagraph.style.fontWeight = 'bolder';
firstParagraph.style.fontSize = '25px';

secondParagraph.style.color = 'red';
secondParagraph.style.fontSize = '25px';

thirdParagraph.style.textDecorationLine = 'underline';
thirdParagraph.style.fontSize = '25px';

fourthParagraph.style.fontStyle = 'oblique';
fourthParagraph.style.fontSize = '25px';

myList.style.display = 'flex';
myList.style.flexDirection = 'row';
myList.style.listStyleType = 'none';
myList.style.fontSize = '25px';

//? Task 3
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
document.body.appendChild(main);

const div = document.createElement("div");
div.setAttribute("id", "myDiv");
main.appendChild(div);

const p = document.createElement("p");
p.textContent = "First paragraph";
div.appendChild(p);

//? Tast 4
//реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
// const sendButton = document.querySelector(".btn"); 
// const outBlock = document.querySelector(".out"); 
// sendButton.addEventListener("click", function(event) { 
//     event.preventDefault(); 
//     const inputs = document.querySelectorAll(".arr"); 
//     let output = ""; 

//     inputs.forEach(function(input) { 
//         const label = input.getAttribute("data-form"); 
//         const value = input.value; 
//         output += label + ": " + value + "<br>"; 
//         });
//     outBlock.innerHTML = output;
// });