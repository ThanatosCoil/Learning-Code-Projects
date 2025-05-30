//-------------------------------------- ФУНКЦИИ -----------------------------

function sayHi(name: string) {
  // Задали тип параметров
  console.log(`Hello there ${name.toLocaleUpperCase()}`);
}

// sayHi(3); // Ошибка
sayHi("misha"); // Правильно

//----------------------------------------------------

function calculateDiscount(price: number): number {
  // Задали не только тип параметра, но и тип return-а

  const hasDiscount = false;
  if (hasDiscount) {
    return "Discount Applied"; // Будет ругаться, так как тип возврата не соответствует тому что задали
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
finalPrice;

function calculateDiscount1(price: number) {
  // Оставим возврат пустым

  const hasDiscount = true;
  if (hasDiscount) {
    return "Discount Applied"; //  Не будет ругаться, так как TS автоматически настроил 2 типа возврата
  }
  return price * 0.9;
}

const finalPrice1 = calculateDiscount1(200); // Вот здесь можно посмотреть типы возвратов
finalPrice1;

// ------------------------------------ CHALLENGE ------------------------------

let names = ["Misha", "Sasha", "Sergey"];

function hasName(name: string): boolean {
  // if (
  //   names.find(
  //     (arrayname) => arrayname.toLocaleUpperCase() === name.toLocaleUpperCase()
  //   )
  // ) {
  //   return true;
  // } else return false;
  return names.includes(name);
}

console.log(hasName("Sergey")); // true
console.log(hasName("Grisha")); // false
