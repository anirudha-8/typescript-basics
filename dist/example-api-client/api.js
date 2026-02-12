"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiClient {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async request(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            if (!response.ok) {
                return {
                    success: false,
                    error: `HTTP error! status: ${response.status}`,
                };
            }
            const data = await response.json();
            return { success: true, data };
        }
        catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            };
        }
    }
    async getUsers() {
        return this.request("/users");
    }
    async getUser(id) {
        return this.request(`/users/${id}`);
    }
    async getPosts() {
        return this.request("/posts");
    }
    async getUserPosts(userId) {
        return this.request(`/posts?userId=${userId}`);
    }
}
// Usage
const api = new ApiClient("https://jsonplaceholder.typicode.com");
async function main() {
    console.log("Fetching Piyush's data...");
    const usersResponse = await api.getUsers();
    if (usersResponse.success) {
        const piyush = usersResponse.data.find((u) => u.name === "Piyush");
        if (piyush) {
            console.log("User:", piyush);
            const postsResponse = await api.getUserPosts(piyush.id);
            if (postsResponse.success) {
                console.log(`Piyush has ${postsResponse.data.length} posts`);
            }
        }
    }
    else {
        console.error("Error:", usersResponse.error);
    }
}
main();
//# sourceMappingURL=api.js.map