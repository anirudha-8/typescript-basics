"use strict";
// Primitive
let userName = "Anirudha";
let age = 23;
let isMarried = false;
// Arrays
let numbers = [1, 2, 3, 4];
let names = ["Anirudha", "Rohit"];
// Tuples
let person = ["Anirudha", "Bele", 23];
// Enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
let favoriteColor = Colors.Green;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "anya";
randomValue = true;
// unknown (safer than any)
let userInput = "text";
userInput = "rohya";
userInput = 21;
// Void (for functions that don't return anything)
function greeting(name) {
    console.log(`Hello, ${name}`);
}
// Null and Undefined
let nullValue = null;
let UndefinedValue = undefined;
//# sourceMappingURL=02-basic-types.js.map