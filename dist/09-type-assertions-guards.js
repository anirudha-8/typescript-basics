"use strict";
// =============== //
// Type assertions //
// =============== //
let someValue = "this is a string";
let strLengthOne = someValue.length;
// OR
let strLengthTwo = someValue.length;
// =========== //
// Type guards //
// =========== //
/*
  Type Guard Function: isString

  Purpose:
  --------
  - Checks at runtime if a given value is a string.
  - Informs TypeScript at compile time that when this function returns true,
    the value can safely be treated as a string.

  Key Concept:
  ------------
  - The return type `value is string` is called a *type predicate*.
  - Unlike normal return types (boolean, string, number, void),
    a type predicate tells TypeScript:
      "If I return true, then `value` is of type string."
  - At runtime, this function still returns a boolean (true/false).
  - At compile time, it helps TypeScript narrow the type of `value`.
*/
function isString(value) {
    return typeof value === "string";
}
/*
  Function: processValue

  Purpose:
  --------
  - Accepts a value that can be either a string or a number.
  - Uses the type guard `isString` to decide how to process the value.

  Flow:
  -----
  1. If `isString(value)` returns true:
     - TypeScript now knows `value` is a string.
     - Safe to call string methods like `.toUpperCase()`.

  2. If `isString(value)` returns false:
     - TypeScript knows `value` is NOT a string.
     - Since the only other option is number, `value` is narrowed to number.
     - Safe to call number methods like `.toFixed()`.
*/
function processValue(value) {
    if (isString(value)) {
        console.log(value.toUpperCase()); // String branch
    }
    else {
        console.log(value.toFixed(2)); // Number branch
    }
}
/*
  Example Usage:
  --------------
  processValue("hello"); // Output: "HELLO"
  processValue(42);      // Output: "42.00"

  Summary:
  --------
  - `isString` bridges runtime checks with TypeScript's compile-time type safety.
  - This pattern is powerful when working with union types (string | number, etc.)
    or unknown values (e.g., API responses, user input).
*/
// ===================== //
// instanceof type guard //
// ===================== //
/*
  Class: Dog
  ----------
  - Represents a Dog object.
  - Has a method `bark()` that prints "Woof!" to the console.
*/
class Dog {
    bark() {
        console.log("Woof!");
    }
}
/*
  Class: Cat
  ----------
  - Represents a Cat object.
  - Has a method `meow()` that prints "Meow!" to the console.
*/
class Cat {
    meow() {
        console.log("Meow!");
    }
}
/*
  Function: makeSound
  -------------------
  Purpose:
  - Accepts an object that can be either a Dog or a Cat.
  - Uses the `instanceof` operator as a type guard to determine
    the actual class of the object at runtime.

  Key Concept: `instanceof`
  --------------------------
  - `instanceof` checks whether an object was created from a specific class.
  - At runtime: it returns true or false.
  - At compile time: TypeScript narrows the type of the variable
    based on the result of the check.

  Flow:
  -----
  1. If `animal instanceof Dog`:
     - TypeScript knows `animal` is a Dog.
     - Safe to call `animal.bark()`.

  2. Otherwise:
     - Since the union type is Dog | Cat, if it's not a Dog,
       TypeScript knows it must be a Cat.
     - Safe to call `animal.meow()`.
*/
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // Dog branch
    }
    else {
        animal.meow(); // Cat branch
    }
}
/*
  Example Usage:
  --------------
  const d = new Dog();
  const c = new Cat();

  makeSound(d); // Output: "Woof!"
  makeSound(c); // Output: "Meow!"

  Summary:
  --------
  - `instanceof` is a built-in type guard for class-based objects.
  - It works similarly to custom type guards, but is simpler
    when dealing with classes.
*/
//# sourceMappingURL=09-type-assertions-guards.js.map