"use strict";
// Numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// String enum
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["Pending"] = "PENDING";
    ResponseStatus["Approved"] = "APPROVED";
    ResponseStatus["Rejected"] = "REJECTED";
})(ResponseStatus || (ResponseStatus = {}));
function handleResponse(status) {
    if (status === 200 /* HttpStatus.OK */) {
        console.log("Success!");
    }
}
//# sourceMappingURL=13-enums.js.map