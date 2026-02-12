"use strict";
// Promise with TypeScript
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "Piyush" });
        }, 1000);
    });
}
// Async/await
async function getUserData(id) {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    }
    catch (error) {
        console.error("Error fetching user:", error);
    }
}
// Generic async function
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
//# sourceMappingURL=14-async-await.js.map