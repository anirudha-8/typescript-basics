// Object type annotation
let user: { name: string; age: number } = {
	name: "Anirudha",
	age: 23,
};

// Interfaces
interface User {
	name: string;
	age: number;
	email?: string; // optional property
	readonly id: number; // readonly property
}

let newUser: User = {
	id: 1,
	name: "Anirudha",
	age: 23,
};
// Error: Cannot assign to 'id' because it is a read-only property.
// newUser.id = 2;

// Interfaces with methods
interface Product {
	name: string;
	price: number;
	getDiscount(percentage: number): number;
}

let laptop: Product = {
	name: "HP Pavilion 15s",
	price: 64000,
	getDiscount(percentage: number): number {
		return this.price * (percentage / 100);
	},
};
