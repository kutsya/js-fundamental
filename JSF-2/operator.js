//? Task 1

console.log('a < b < c', 'a' < 'b' < 'c');

//? Task 2

let x = 1;
let y = 2;

let res1 = x + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = !!x + "" + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x - "a"; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//? Task 3

let isAdult = prompt("Ваш вік:");

if (isAdult >= 18) {
  console.log("Ви досягли повнолітнього віку");
} else {
  console.log("Ви ще надто молоді");
};

//? Task 5

// Запитуємо користувача про довжини сторін трикутника
let a = parseFloat(prompt("Введіть довжину першої сторони трикутника"));
let b = parseFloat(prompt("Введіть довжину другої сторони трикутника"));
let c = parseFloat(prompt("Введіть довжину третьої сторони трикутника"));

// Перевіряємо, чи введені дані коректні
if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  console.log("Incorrect data");
} else {
  // Обчислюємо півпериметр
  let p = (a + b + c) / 2;

  // Обчислюємо площу трикутника за формулою Герона
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  // Виводимо площу трикутника з точністю 3 знаки після коми
  console.log("Площа трикутника: " + s.toFixed(3));

  // Перевіряємо, чи трикутник є прямокутним
  if (a * a + b * b === c * c || b * b + c * c === a * a || c * c + a * a === b * b) {
    console.log("Цей трикутник є прямокутним");
  } else {
    console.log("Цей трикутник не є прямокутним");
  }
};

//? Task 6

let date = new Date();
let hours = date.getHours();

if (hours >= 23 || hours < 5) {
  console.log("Доброї ночі");
} else if (hours >= 5 && hours < 11) {
  console.log("Доброго ранку");
} else if (hours >= 11 && hours < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
};
