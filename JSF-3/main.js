//? Task 1

const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2); // [5,3,4,6,7]
function compact(arr) {
    return Array.from(new Set(arr))
};

//? Task 2

let arr3 = createArray(2, 9);
console.log(arr3); // [2,3,4,5,6,7,8,9]
function createArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
    result.push(i);
    }
    return result;
};

//? Task 3

function printNumbers(a, b) {
    let count = 1;
    for (let i = a; i <= b; i++) {
    for (let j = 0; j < count; j++) {
    console.log(i);
    }
    count++;
    }
};


//? Task 4

randArray(5);
function randArray(k) {
    const arr = [];
    for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
};

//? Task 5



//? Task 6

function calc(a, b, op) {
    let result;
    switch(op) {
    case 1:
        result = a - b;
        break;
    case 2:
        result = a * b;
        break;
    case 3:
        result = a / b;
        break;
    default:
        result = a + b;
        break;
    }
    return result;
};

//? Task 7

findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
function findUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
};
