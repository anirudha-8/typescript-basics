declare let user: {
    name: string;
    age: number;
};
interface User {
    name: string;
    age: number;
    email?: string;
    readonly id: number;
}
declare let newUser: User;
interface Product {
    name: string;
    price: number;
    getDiscount(percentage: number): number;
}
declare let laptop: Product;
//# sourceMappingURL=05-objects-interfaces.d.ts.map