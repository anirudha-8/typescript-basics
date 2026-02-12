declare enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
declare enum ResponseStatus {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
declare const enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}
declare function handleResponse(status: HttpStatus): void;
//# sourceMappingURL=13-enums.d.ts.map