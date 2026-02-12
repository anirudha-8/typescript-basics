"use strict";
// Generic Function
function identity(arg) {
    return arg;
}
let outputOne = identity("myString");
let outputTwo = identity(100);
// Generic with arrays
function getFirstElement(arr) {
    return arr[0];
}
let firstNumber = getFirstElement([1, 2, 3, 4]);
let firstName = getFirstElement(["Anirudha", "Rohit"]);
let stringNumberPair = {
    key: "age",
    value: 23,
};
// Generic Classes
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItems() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hello");
textStorage.addItem("World");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("hello"); // OK
logLength([1, 2, 3]); // OK
// Argument of type  is not assignable to parameter of type
// logLength(123); // Error: number doesn't have length
//# sourceMappingURL=11-generics.js.map