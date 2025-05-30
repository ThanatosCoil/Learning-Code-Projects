//-------------------------------------- ДЖЕНЕРИКИ -----------------------------
// Дженерики в TypeScript — это способ создания повторно используемых компонентов кода, которые работают с различными типами, а не с одним
// Другими словами, дженерики позволяют вам написать функцию или класс, которые могут работать с любым типом данных. Вы можете думать о дженериках как о своего рода переменной для типов.

// Обычный способ
// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// Дженерик
let array1: Array<string> = ["Apple", "Banana", "Mango"];

function genericFunction<Type>(arg: Type): Type {
  // Задаем дженерик
  return arg;
}

// По синтаксису и правда, как аргумент для функции, но для Типа
const someStringValue = genericFunction<string>("Helo world"); // Используем дженерик
someStringValue;
const someNumberValue = genericFunction<number>(10);
someNumberValue;

// Пример с интерфейсом
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Hello World",
  getValue() {
    return this.value;
  },
};
genericString;

// Пример ассинхронной функции
async function someFunc(): Promise<string> {
  return "hello world";
}
const result = someFunc();
result;

// Еще пример

function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(4, "f1"));

function genericCreateArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = genericCreateArray<string>(3, "f2");
arrayStrings;
let arrayNumbers = genericCreateArray<number>(4, 5);
arrayNumbers;

// ---------------------------- Несколько аргументов для Типа -------------

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let res = pair<number, string>(123, "hello"); // Порядок важен
res;

let r = pair(true, undefined); // Вот так порядок не важен. TS сам решит какого где и какого типа будет переменная
r;

// ------------------------- Ограничение на типы --------------------------

function processValue<T extends string | number>(value: T): T {
  // Ограничиваем только строчным или числовым типом
  return value;
}

console.log(processValue("hello"));
console.log(processValue(100));
console.log(processValue(true)); // Ругается

// ---------- Более сложный пример

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

function printName<T extends { name: string }>(input: T): string {
  // Можно ограничить не просто типами, но формой объекта которая будет передаваться
  return input.name;
}

console.log(printName(student));
console.log(printName(product));

// ------------------------------- Дефолтное значение ---------------------

interface StoreData<T = any> {
  // Если не предоставить тип как в randomStuff, то то что после равно будет применятся по умолчанию т.е. any
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ["TypeScript", 2024],
};
