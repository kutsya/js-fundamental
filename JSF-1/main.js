//? Task 2

console.log('Morozova');

//? Task 3 (Variables)

let door = 's';

let table = 'xl';
let tableSize = table; // Copy by value

console.log('door', door);
console.log('tableSize', tableSize);

//? Task 4

let number = 15; //*Number
console.log(typeof number, number);
let string = 'home'; //*String
console.log(typeof string, string);
let boolean = true; //*Boolean
console.log(typeof boolean, boolean);
let a = null; //*Null
console.log(typeof a, a);
let b; //*Undefined 
console.log(typeof b, b);

//? Task 5

const isAdult = confirm('Are you of legal age?');

//? Task 6

let firstName = "Іван";
let lastName = "Петров";
let group = "js-00";
let birthYear = 2000;
let isMarried = false;

console.log(typeof birthYear, birthYear);
console.log(typeof isMarried, isMarried);
console.log(typeof firstName, firstName);

let nullResult = null;
let undefinedResult;

console.log(typeof nullResult, nullResult);
console.log(typeof undefinedResult, undefinedResult);


//? Task 7

let login = prompt('Dear User, please write your login');
alert(login);
let email = prompt('Dear User, please write your email', 'gmail.com');
alert(email);
let password = prompt('Dear user, please write ypor password', 'qwerty');
alert(password);

//? Task 8

const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

console.log("Кількість секунд в годині:", secondsInHour);
console.log("Кількість секунд в добі:", secondsInDay);
console.log("Кількість секунд в місяці:", secondsInMonth);
