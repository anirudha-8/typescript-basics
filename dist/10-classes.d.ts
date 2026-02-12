declare class Person {
    private name;
    protected age: number;
    email: string;
    constructor(name: string, age: number, email: string);
    introduce(): string;
    getName(): string;
    setName(name: string): void;
}
declare class Employee {
    private id;
    name: string;
    protected department: string;
    constructor(id: number, name: string, department: string);
    getDetails(): string;
}
declare let anirudha: Employee;
declare class Manager extends Employee {
    private teamSize;
    constructor(id: number, name: string, department: string, teamSize: number);
    getInfo(): string;
}
declare abstract class Shape {
    color: string;
    constructor(color: string);
    abstract getArea(): number;
    displayColor(): void;
}
declare class Rectangle extends Shape {
    private width;
    private height;
    constructor(color: string, width: number, height: number);
    getArea(): number;
}
//# sourceMappingURL=10-classes.d.ts.map