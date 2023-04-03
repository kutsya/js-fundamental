//? Task 1

function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
};

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));

//? Task 2

function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//? Task 3

let str = "Java Script";
let regex = /(\w+)\s(\w+)/;
let newStr = str.replace(regex, "$2, $1");
console.log(newStr);

//? Task 4

function validateCreditCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/-/g, '');

    if (cardNumber.length !== 16 || isNaN(parseInt(cardNumber))) {
        return false;
    };

    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let cardDigit = parseInt(cardNumber[i]);

        if (i % 2 === 0) {
            cardDigit *= 2;
            if (cardDigit > 9) {
                cardDigit -= 9;
            }
        };

        sum += cardDigit;
    };

    return sum % 10 === 0;
};

validateCreditCardNumber("9999-9999-9999-9999");
validateCreditCardNumber("9999-9999-9999-9998");


//? Task 5

function checkEmail(email) {
    const pattern = /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

    if (pattern.test(email)) {
        return "Email is correct!";
    } else {
        return "Email is not correct!";
    }
};

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

//? Task 6

function checkLogin(str) {
    const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    if (!loginRegex.test(str)) {
        return false;
    };
    const numbersRegex = /[0-9]*\.?[0-9]+/g;
    const numbers = str.match(numbersRegex);
    return numbers !== null;
};

console.log(checkLogin('ee1.1ret3')); 
console.log(checkLogin('ee1*1ret3')); 
console.log(checkLogin('e1.1ret3')); 
console.log(checkLogin('ee1ret')); 