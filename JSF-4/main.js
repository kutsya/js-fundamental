//? Task 1 

function sumSliceArray(arr, first, second) {
    //! Перевірка, чи є передані аргументи числами
    if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Аргументи повинні бути числами");
    }

    //! Перевірка, чи не виходять передані індекси за межі масиву
    if (first >= arr.length || second >= arr.length) {
    throw new Error("Індекс виходить за межі масиву");
    }

    return arr[first] + arr[second];
};

//? Task 2 



//? Task 3

function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Передані параметри повинні бути числовими');
    }

    return width * height;
};

// Приклад виклику функції та обробки винятку
try {
    const width = 'не число';
    const height = 10;
    const area = calcRectangleArea(width, height);
    console.log(`Площа прямокутника: ${area}`);
} catch (error) {
    console.error(`Сталася помилка: ${error.message}`);
};

//? Task 4



//? Task 5

class UserException extends Error {
    constructor(message) {
    super(message);
    this.name = 'UserException';
    }
};

function showUser(id) {
    if (id < 0) {
    throw new UserException('ID must not be negative: ' + id);
    }
    return { id };
};

function showUsers(ids) {
    const result = [];
    for (const id of ids) {
    try {
        const user = showUser(id);
        result.push(user);
    } catch (e) {
        console.error(e.message);
    }
    }
    return result;
};

console.log(showUsers([7, -12, 44, 22]));

