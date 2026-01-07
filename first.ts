const a: number = 5;
const b: string = "5";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = "123";
const g: true = false;
const z: {} = 5;
// function add(x: number, y: number): number {
//   return x + y;
// }
// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

interface Add {
  (x: number, y: number): number;
}
const add: Add = (x, y) => x + y;

const arr: string[] = ["123", "456"];
const arr2: number[] = [123, 456];
const arr3: [number, number, string] = [123, 456, "d", "e"]; // 튜플
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
