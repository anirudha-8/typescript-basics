"use strict";
// Object type annotation
let user = {
    name: "Anirudha",
    age: 23,
};
let newUser = {
    id: 1,
    name: "Anirudha",
    age: 23,
};
let laptop = {
    name: "HP Pavilion 15s",
    price: 64000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
//# sourceMappingURL=05-objects-interfaces.js.map