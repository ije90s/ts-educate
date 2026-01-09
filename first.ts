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

try {
  // 빈 배열은 never 타입으로 인식하기 때문에, 타입 명시
  const array = [];
  //array[0];
} catch (error) {
  error;
}

// non-null assertion : ! > 되도록이면 안쓰는 게 나음
// 두번째 방법으로 값이 있는지 검증해서 쓰는 게 낫다
const head = document.querySelector("#head")!;
console.log(head);

const head2 = document.querySelector("#head");
if (head2) {
  // 오타 판별
  head2.inneRHTML = "hello";
  console.log(head);
}

// 원시 타입은 되도록이면 소문자 명시
const a1: string = "hello";
const b1: String = "hell"; // new String();

function c(a1: string, b2: string) {}
c(a1, b1);

// 템플릿 리터럴 타입 > 자동 완성 추천
type World = "world" | "hell";
const a2: World = "world";

// 템플릿 리터럴 타입 없이 한다면, 모든 문자열 가능
type Greeting = `hello ${string}`;
const c2: Greeting = "hello";

let arr4: string[] = [];
let arr5: Array<string> = [];
function rest(a: string, ...args: string[]) {
  console.log(a, args);
}
rest("1", "2", "3");

const tuple: [string, number] = ["1", 1];
tuple[2] = "hello"; // 불가능
tuple.push("hello"); // 가능
