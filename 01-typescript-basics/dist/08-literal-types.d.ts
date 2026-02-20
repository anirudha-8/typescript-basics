declare let direction: "north" | "south" | "east" | "west";
declare let diceRoll: number;
type SuccessResponse = {
    status: "success";
    data: any;
};
type ErrorResponse = {
    status: "error";
    message: string;
};
type APIResponse = SuccessResponse | ErrorResponse;
//# sourceMappingURL=08-literal-types.d.ts.map