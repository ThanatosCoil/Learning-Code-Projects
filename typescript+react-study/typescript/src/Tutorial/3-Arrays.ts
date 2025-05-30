// ------------------------------- МАССИВЫ --------------------------------------------

let prices: number[] = [100, 50, 25]; // Массив из чисел
prices = [10, 20, "five"]; // Ошибка
prices.push("hello"); // Ошибка

let fruits: string[] = ["apple", "orange"];

let randomValues: [] = ["hey", 1]; // Это НЕ ANY, это мы говорим что всегда будет пустой массив

let emptyValues = []; // А вот это ANY :)

let names = ["peter", "susan", 1]; // TS сам настроил string | number

let array: (string | boolean)[] = ["apple", true, "orange", false];
