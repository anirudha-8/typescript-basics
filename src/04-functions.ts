// Basic function with types
function add(a: number, b: number): number {
	return a + b;
}
console.log(add(3, 5));

// Optional parameters
function greet(name: string, greeting?: String): string {
	if (greeting) return `${greeting}, ${name}!`;
	return `Hello, ${name}!`;
}
console.log(greet("Anirudha"));
console.log(greet("Anirudha", "Good Morning"));

// Default parameters
function multiply(a: number, b: number = 1) {
	return a * b;
}
console.log(multiply(4, 2));
console.log(multiply(8));

// Rest parameters
function sum(...numbers: number[]): number {
	return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4));

// Arrow functions
const divide = (a: number, b: number): number => a / b;
console.log(divide(8, 1));

// Function types
let calculate: (x: number, y: number) => number;
calculate = add;
console.log(calculate(4, 4));
