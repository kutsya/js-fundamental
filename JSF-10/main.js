//? Task 1

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, ...rest } = names;

let result = { ...rest, fifth: "Name №5" };

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(result.fifth); // "Name №5"

//? Task 2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let [, name2, , name4] = data.names;
let [, age2, , age4] = data.ages;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//? Task 3

function mul() {
    let product = 1;
    let hasNumber = false;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            product *= arguments[i];
            hasNumber = true;
        }
    }

    return hasNumber ? product : 0;
};

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//? Task 4

let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => {
            return `${this.data}`;
        });
    },
};

let client = {
    server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback) => {
            this.result = callback();
        };
    },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//? Task 5

function mapBuilder(keysArray, valuesArray) {
    const map = new Map();

    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i]);
    }

    return map;
};
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"

//? Task 6

var arr = [];

for (var i = 0; i <= 2; i++) {
    arr[i] = (function (j) {
        return function () {
            console.log(j);
        };
    })(i);
};

arr[0](); // 0
arr[arr.length - 1](); // 2