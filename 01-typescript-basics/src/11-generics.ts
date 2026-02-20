// Generic Function
function identity<T>(arg: T): T {
	return arg;
}
let outputOne = identity<string>("myString");
let outputTwo = identity<number>(100);

// Generic with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
	return arr[0];
}
let firstNumber = getFirstElement([1, 2, 3, 4]);
let firstName = getFirstElement(["Anirudha", "Rohit"]);

// Generic Interfaces
interface keyValuePair<K, V> {
	key: K;
	value: V;
}

let stringNumberPair: keyValuePair<string, number> = {
	key: "age",
	value: 23,
};

// Generic Classes
class DataStorage<T> {
	private data: T[] = [];

	addItem(item: T): void {
		this.data.push(item);
	}

	removeItem(item: T): void {
		this.data = this.data.filter((i) => i !== item);
	}

	getItems(): T[] {
		return [...this.data];
	}
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");

// Generic constraints
interface Lengthwise {
	length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK

// Argument of type  is not assignable to parameter of type
// logLength(123); // Error: number doesn't have length
