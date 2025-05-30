// ----------------------------------- UNION TYPES ---------------------------------------------------

// Можно задавать несколько типов для одной переменной
let tax: number | string = 10;
tax = 100;
tax;
tax = "$100";
tax;

// Можно назначить переменной конкретные значения которые у нее могут быть
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "random"; // Ошибка
requestStatus = "success"; // Правильно

// Можно задать ЛЮБОЙ тип для переменной (Да, как в оригинальном JS)
let notSure: any = 4;
notSure = true; // Ошибки нет

// Немного практики

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string;

for (let book of books) {
  if (book === "Fahrenheit 451") {
    foundBook = book;
    break;
  }
}
foundBook;

// Почему ругается? Да потому что foundBook присваевается строке только при определенных условиях
// но если пытаться его использовать дальше, то он будет ругаться, потому что вне условия он не определен еще
// Вот как исправить

let foundBook2: string | undefined; // Добавляем ему как бы дефолтное undefined для случаев если не попадет в условия

for (let book of books) {
  if (book === "Fahrenheit 451") {
    foundBook2 = book;
    foundBook2 = foundBook2.toLocaleUpperCase();
    break;
  }
}

foundBook2?.length; // Добавил .? не я, а она добавляется по дефолту, потому что оно может быть undefined
foundBook2;

// --------------------------------- CHALLENGE -----------------------------------

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus;
orderStatus = "delivered";
orderStatus;

let discount: number | string = 20;
discount = "20%";
discount;
