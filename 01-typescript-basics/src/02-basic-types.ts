// Primitive
let userName: string = "Anirudha";
let age: number = 23;
let isMarried: boolean = false;

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Anirudha", "Rohit"];

// Tuples
let person: [string, string, number] = ["Anirudha", "Bele", 23];

// Enum
enum Colors {
	Red,
	Green,
	Blue,
}
let favoriteColor: Colors = Colors.Green;

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "anya";
randomValue = true;

// unknown (safer than any)
let userInput: unknown = "text";
userInput = "rohya";
userInput = 21;

// Void (for functions that don't return anything)
function greeting(name: string): void {
	console.log(`Hello, ${name}`);
}

// Null and Undefined
let nullValue: null = null;
let UndefinedValue: undefined = undefined;
