type Status = "pending" | "approved" | "rejected";
declare function setStatus(status: Status): void;
type stringOrNumber = string | number;
declare function printId(id: stringOrNumber): void;
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
type ColorfulCircle = Colorful & Circle;
declare let myCircle: {
    color: string;
    radius: number;
};
//# sourceMappingURL=07-union-intersections.d.ts.map