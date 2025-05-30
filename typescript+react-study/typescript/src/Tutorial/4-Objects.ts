//------------------------- ОБЪЕКТЫ -----------------------------

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 }; // Вот как задавать тип

car.brand = "ford"; // Правильно
car.year = "two"; // Ошибка

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { title: string; cost: number }[] = [book, pen, notebook]; // Задали массив объектов, с конкретными типами для свойств, но ругается на notebook, из за отсутствия одного свойства

let items1: { title: string; cost?: number }[] = [book, pen, notebook]; // Вот как это исправить, добавить опционально свойство

let items2: { readonly title: string; cost?: number }[] = [book, pen, notebook]; // Как сделать свойство только для чтения

items2[0].title = "new book"; // Ошибка
