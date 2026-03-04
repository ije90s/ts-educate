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

const enum EDirection {
  UP,
  Down,
  Left,
  Right,
}

// as const를 사용하면, readonly key-value 형태로 읽힘 (Enum)
// 사용하지 않는다면, number로 인식
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
const a3 = EDirection.UP;
const c3 = EDirection.Left;

// enum 타입으로 사용 가능
function walk(dir: EDirection) {}

// enum 대신 사용하려면 typeof, keyof 활용
type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

// keyof
// obj2는 js의 값이기 때문에 타입으로 사용 불가능 > 타입을 사용하려면 앞에 typeof 키워드 명시
// as const를 안 적으면 Key2가 stirng으로 인식(엄격하게)
const obj2 = { a: "123", b: "hello", c: "world" } as const;
type Key = keyof typeof obj2; // 키만 가져옴
type Value = (typeof obj2)[keyof typeof obj2]; // 밸류만 가져옴

// 간단하게 타입 명기만 할 경우, type
// 객체 지향으로 소스 짤 경우, interface
// 두개 다 형태는 비슷
type A = { a: string };
const a4: A = { a: "hello" };

interface B {
  a: string;
}
const b4: B = { a: "hello" };

// 초기에 변수를 지정할 때, 타입이 명확해야 한다.
// 안그러면 타입스크립트에서 함수 혼용이 일어남
function add2(x: string | number, y: string | number): string | number {
  return x + y;
}
const result: string | number = add2(1, 2); // string으로 착각
add2("1", "2");
add2(1, "2");

type A2 = {
  a: string;
};
type B2 = {
  b: string;
};

const aa: A2 | B2 = { a: "hello", b: "world" }; // union
const bb: A2 & B2 = { a: "hello", b: "world" }; // intersection

// &를 사용하면 확장 가능
type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const human: Human = { breath: true, breed: true, think: true };

interface A3 {
  breath: true;
}
interface B3 extends A3 {
  breed: true;
}

const b5: B3 = { breed: true, breath: true };

// interface 합칠 수 있어, 확장 가능
interface A4 {
  talk: () => void;
}
interface A4 {
  eat: () => void;
}
interface A4 {
  shit: () => void;
}
const a: A4 = { talk() {}, eat() {}, shit() {} };

// A > B (벤다이그램)
// 좁은 타입에서 넓은 타입 대입 가능
// 넓은 타입에서 좁은 타입 대입 불가
type A = string | number;
type B = string;

// any: 전체집합, never: 공집합
type C = string & number;

// 속성이 적을수록 넓은 타입
// 객체는 구체적으로 좁은 타입
// DE > D, E > F
type D = { name: string };
type E = { age: number };
type DE = D | E; // 합집합
type F = D & E; // {name: string, age: number} 교집합

const de: DE = { name: "dd" };
// 넓은 타입을 좁은 타입에 넣을 수 없음
const f: F = de;
// 객체 리터럴 타입: 타입 넓으냐? 좁으냐? 검사 뿐만 아니라 잉여 속성 검사도
const f2: F = { name: "dd", age: 5, married: false };
const obj = { name: "dd", age: 5, married: false };
const f3: F = obj;

// void는 매개변수, 리턴값, 메서드에 void 타입을 쓸수 있는데,
// 리턴값만 return 할수 없음(undefined나 단순 리턴은 가능)
// 그 외는 리턴 가능
function a6(callback: () => void): void {
  //return '3';
  //return undefined;
  return;
}
a6(() => {
  return "3";
});

const b = a();

interface Human2 {
  talk: () => void;
}
const human2: Human2 = {
  talk() {
    return "abc";
  },
};

// undefined !== number
// void는 어떤 타입의 리턴값이든 상관 X(무시)
declare function forEach(
  arr: number[],
  callback: (el: number) => undefined
): void;

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));

// 타입 가드: typeof, Array.isArray, istanceof, in, 커스텀 타입가드(리턴값: is 연산자 이용)
function numOrStr(a: number | string) {
  if (typeof a === 'string') { //타입 가드
    a.split(',');  
  }
  
  if(typeof a === 'number'){
    a.toFixed(1);
  }

  // never > 이미 파라미터에서 boolean 타입은 받지 않으므로
  // if(typeof a === 'boolean'){
  //   a.toString();
  // }
}

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.slice(1);  
  } else {
    a.toFixed(1);
  }
}

class A5 {
  aaa(){}
}

class B3 {
  bbb(){}
}

function aOrb(param: A5 | B3){
  if(param instanceof A5){
    param.aaa();
  }else{
    param.bbb();
  }
}
aOrb(new A5()); // 인스턴스 전달
aOrb(new B3());

type B4 = { type: 'b', bbb: string };
type C4 = { type: 'c', ccc: string };
type D4 = { type: 'd', ddd: string };
type A6 = B4 | C4 | D4;
// 값/속성을 통해 클래스 구분 가능
// 대부분 값을 이용하여 클래스 구분
function typeCheck(a: A6) {
  // if (a.type === 'b') {
  //   a.bbb;
  // } else if (a.type === 'c') {
  //   a.ccc;
  // } else {
  //   a.ddd;
  // }
  if('bbb' in a){
    a.type;
  }else if('ccc' in a){
    a.ccc;
  }else{
    a.ddd;
  }
}
// 객체 생성 시에 타입 명시
// 타입 명시가 없을 경우, 속성으로 구별
const human = { type: 'human' };
const dog = { type: 'dog' };
const cat = { type: 'cat' }

// 커스텀 타입 가드
interface Cat { meow: number }
interface Dog { bow: number }
// 타입을 구분해주는 커스텀 함수를 직접 커스텀 가능
// 리턴값에 is 연산자가 있는 경우, 커스텀 타입 가드
function catOrDog(a: Cat | Dog): a is Dog {
  // 타입 판별: 커스텀
  if ((a as Cat).meow) { return false }
  return true;
}
const cat: Cat | Dog = { meow: 3 }
if (catOrDog(cat)) { // 타입가드(커스텀)
    console.log(cat.meow);
}
if ('meow' in cat) {
    console.log(cat.meow);
}