declare let someValue: unknown;
declare let strLengthOne: number;
declare let strLengthTwo: number;
declare function isString(value: unknown): value is string;
declare function processValue(value: string | number): void;
declare class Dog {
    bark(): void;
}
declare class Cat {
    meow(): void;
}
declare function makeSound(animal: Dog | Cat): void;
//# sourceMappingURL=09-type-assertions-guards.d.ts.map