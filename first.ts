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

// interface Add {
//   (x: number, y: number): number;
// }
// const add: Add = (x, y) => x + y;

const arr: string[] = ["123", "456"];
const arr2: number[] = [123, 456];
const arr3: [number, number, string] = [123, 456, "d", "e"]; // 튜플
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

function add(x: number, y: number): number; // 타입 + 선언
function add(x, y) {
  return x + y;
}

const message = "hello";
message();

const user = {
  name: "Daniel",
  age: 26,
};
user.location;

const announcement = "Hello World!";

// 바로 보자마자 오타인지 아실 수 있나요?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// 아마 아래와 같이 적으려 했던 것이겠죠...
announcement.toLocaleLowerCase();

function flipCoin() {
  return Math.random < 0.5;
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // ...
}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

// 타입 추론
let msg = "hello";

// 타입 > js 변환 시에 지워지는 것: 콜론, type, class, 제너릭, as
// 타입을 명시적으로 나타낸 부분들은 js 변환 시에 사라짐
// js 타겟은 낮은 버전으로 변환 시에는 그 버전에 맞게 js 문법으로 치환
// 예) tsc --target es5 input.ts
// console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
