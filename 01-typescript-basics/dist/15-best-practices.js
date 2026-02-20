"use strict";
// ✅ DO: Use strict mode
// In tsconfig.json: "strict": true
const piyushAgarwal = {
    id: 1,
    name: "Piyush",
    skills: ["React", "TypeScript", "Next.js"],
};
// ✅ DO: Avoid 'any', use 'unknown' if type is truly unknown
function processVal(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}
// ✅ DO: Use const for values that won't change
const MAX_USERS = 100;
const config = {
    apiKey: "abc123",
    author: "Piyush",
};
// ❌ DON'T: Use 'any' unless absolutely necessary
// let data: any = fetchData(); // Bad
// ❌ DON'T: Ignore TypeScript errors
// @ts-ignore should be very rare
//# sourceMappingURL=15-best-practices.js.map