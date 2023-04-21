//? Task 1

function getPromise(message, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function (data) {
    console.log(data);
});

//? Task 2

function calcArrProduct(arr) {
    return new Promise(function (resolve, reject) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                product *= arr[i];
            } else {
                reject("Error! Incorrect array!");
                return;
            }
        }
        resolve(product);
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

//? Task 3

new Promise(function (resolve, reject) {
    let number = prompt("Please enter a number:");
    if (isNaN(number)) {
        reject("Invalid input. Please enter a number.");
    } else {
        resolve(Number(number));
    }
}).catch(function (error) {
    console.log(error);
    return new Promise(function (resolve, reject) {
        let number;
        do {
            number = prompt("Please enter a number:");
        } while (isNaN(number));
        resolve(Number(number));
    });
}).then(function (result) {
    console.log("The number you entered is:", result);
});

//? Task 4

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i <= 10; i++) {
        await delay(i, Math.floor(Math.random() * 3000)); // очікуємо завершення виводу попереднього числа перед виведенням наступного
        console.log(i);
    }
}

showNumbers();