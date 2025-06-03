//-------------------------------------- Tuple -----------------------------

let person: [string, number] = ["john", 25]; // Теперь длина массива и тип каждого элемента фиксированн

let date: [number, number, number] = [12, 17, 2001];
date.push(30); // Не ругается, хотя должен, чтобы такого избежать надо добавить readonly [number, number, number]
function getPerson(): [string, number] {
  return ["john", 25];
}

let randomPerson = getPerson();
randomPerson;

let susan: [string, number?] = ["susan"]; // Не ругается
