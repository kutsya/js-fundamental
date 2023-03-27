//? Task 1

class Circle {
    constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    }

    getLength() {
      return 2 * Math.PI * this.r;
    }

    static getLengthByRadius(r) {
      return 2 * Math.PI * r;
    }

    getCopy() {
    return new Circle(this.x, this.y, this.r);
    }

    static create(x, y, r) {
    return new Circle(x, y, r);
    }

    isPointInside(x, y) {
    return Math.sqrt(Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2)) <= this.r;
    }

    toString() {
    return `Circle with center at (${this.x}, ${this.y}) and radius ${this.r}`;
    }
};

//? Task 2

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
};

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};

 console.log(propsCount(mentor)); // 3

//? Task 3

class Person {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    }

    showFullName() {
    console.log(this.name + " " + this.surname);
    }
};

class Student extends Person {
    constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    }

    showFullName(middleName) {
    console.log(this.surname + " " + this.name + " " + middleName);
    }

    showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return course > 0 && course <= 6 ? course : "Invalid course";
    }
};

const stud1 = new Student("Petro", "Petrenko", 2019);
  console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
  console.log("Current course: " + stud1.showCourse()); //Current course: 4
