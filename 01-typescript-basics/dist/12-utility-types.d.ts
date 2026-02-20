interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    assignedTo: string;
}
type PartialTodo = Partial<Todo>;
declare let updateTodo: PartialTodo;
type RequiredTodo = Required<Todo>;
type ReadonlyTodo = Readonly<Todo>;
declare let myTodo: ReadonlyTodo;
type TodoPreview = Pick<Todo, "title" | "completed">;
declare let preview: TodoPreview;
type TodoWithoutDate = Omit<Todo, "createdAt">;
type PageInfo = {
    title: string;
    url: string;
};
type Pages = "home" | "about" | "contact";
declare let pages: Record<Pages, PageInfo>;
declare function createUser(): {
    id: number;
    name: string;
    email: string;
};
type UserType = ReturnType<typeof createUser>;
//# sourceMappingURL=12-utility-types.d.ts.map