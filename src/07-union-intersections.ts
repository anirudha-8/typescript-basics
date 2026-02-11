// Union Types (OR)
type Status = "pending" | "approved" | "rejected";
function setStatus(status: Status): void {
	console.log(`Status set to: ${status}`);
}
setStatus("approved");
// setStatus("completed"); // Error!

type stringOrNumber = string | number;
function printId(id: stringOrNumber): void {
	if (typeof id === "string") {
		console.log(`ID (string): ${id.toUpperCase()}`);
	} else {
		console.log(`ID (number): ${id}`);
	}
}

// Intersection Types (AND)
interface Colorful {
	color: string;
}

interface Circle {
	radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle = {
	color: "red",
	radius: 10,
};
