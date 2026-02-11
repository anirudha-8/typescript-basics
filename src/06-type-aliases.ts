// Type alias
type Point = {
	x: number;
	y: number;
};
let coOrdinate: Point = { x: 10, y: 20 };

// Type alias for primitives
type ID = string | number;
let userId: ID = "anya8";
let productId: ID = 456;

// ==== Type Alias vs Interface ==== //
// Interfaces can be extended, type aliases cannot
// Interfaces can be declared multiple times and will merge
// Use interfaces for object shapes, type aliases for unions / intersections
