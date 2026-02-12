declare function identity<T>(arg: T): T;
declare let outputOne: string;
declare let outputTwo: number;
declare function getFirstElement<T>(arr: T[]): T | undefined;
declare let firstNumber: number | undefined;
declare let firstName: string | undefined;
interface keyValuePair<K, V> {
    key: K;
    value: V;
}
declare let stringNumberPair: keyValuePair<string, number>;
declare class DataStorage<T> {
    private data;
    addItem(item: T): void;
    removeItem(item: T): void;
    getItems(): T[];
}
declare let textStorage: DataStorage<string>;
interface Lengthwise {
    length: number;
}
declare function logLength<T extends Lengthwise>(arg: T): T;
//# sourceMappingURL=11-generics.d.ts.map