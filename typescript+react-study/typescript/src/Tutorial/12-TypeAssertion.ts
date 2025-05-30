//-------------------------------------- Утверждение типов -----------------------------
// Способ сказать браузера какого типа существующая переменная, утверждать что мы знаем лучше какого типа переменная

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length; // Утверждаем что someValue это строка

// Удобно использовать с json parse потому что он возвращает тип any

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString); // Тип any, мы такого не хотим
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird; // Не смотря на неправильность TS не ругается

console.log(bird.name);
console.log(dog.name); // Очевидно тут из за этого undefined

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// Допустим сохраним Status.Pending в базе данных как строку
// И потом заберем эту строку

const statusValue = "pending"; // Допустим это то что мы получим из базы данных

// const user: User = { name: "john", status: statusValue }; // TS ругается ведь он не знает что и как я сохранил в БД
const user: User = { name: "john", status: statusValue as Status }; // Поэтому записываем так, потому что мы точно знаем какого он типа
