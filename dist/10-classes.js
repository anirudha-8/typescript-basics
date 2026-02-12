"use strict";
class Person {
    // Properties
    name;
    age;
    email;
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    // Getter
    getName() {
        return this.name;
    }
    // Setter
    setName(name) {
        this.name = name;
    }
}
// Shorter syntax with parameter properties
class Employee {
    id;
    name;
    department;
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}.`;
    }
}
let anirudha = new Employee(101, "Anirudha", "Engineering");
console.log(anirudha.getDetails());
// Inheritance
class Manager extends Employee {
    teamSize;
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getInfo() {
        return `${this.name} manages ${this.teamSize} peoples.`;
    }
}
// Abstract Classes
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
    displayColor() {
        console.log(`This shape is ${this.color}.`);
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
//# sourceMappingURL=10-classes.js.map