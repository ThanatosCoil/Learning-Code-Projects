//-------------------------------------- ОПЦИОНАЛЬНЫЕ И ДЕФОЛТНЫЕ ПАРАМЕТРЫ -----------------------------

function calculatePrice(price: number, discount?: number): number {
  // Задали опциональный параметр скидки
  // return price - discount; // TS ругается на discount теперь, потому что в случае если его не будет, а значит он будет undefined, то функция не будет иметь смысла
  return price - (discount || 0); // Чтобы не ругался задаем значение на случай если не будет discount
}

let priceAfterDiscount = calculatePrice(100, 20);
priceAfterDiscount;

// ----------------------------------------------------------

function calculateScore(initialScore: number, penaltyPoints: number): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
scoreAfterPenalty;

let scoreWithoutPenalty = calculateScore(300); // Ругается без параметра
scoreWithoutPenalty;

// ----------------------------------------------------------

function calculateScore1(
  initialScore: number,
  penaltyPoints: number = 0 // Задаем значение по умолчанию
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty1 = calculateScore1(100, 20);
scoreAfterPenalty1;

let scoreWithoutPenalty1 = calculateScore1(300); // Не ругается без параметра, т.к. есть значение по дефолту
scoreWithoutPenalty1;

// ------------------------------- REST ПАРАМЕТРЫ ----------------------------------

function sum(message: string, ...numbers: number[]): string {
  // Rest параметру, тоже надо задавать тип. ВАЖНО: TS считает Rest параметры за массив, поэтому тип надо задавать как для массива
  const double = numbers.map((num) => num * 2); // TS сам понял какой тип у значений массива
  console.log(double);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message}${total}`;
}

let result = sum("The total is: ", 1, 2, 3, 4, 5);

result;

// ------------------------------- ПУСТАЯ ФУНКЦИЯ ---------------------------------------

function logMessage(message: string) {
  console.log(message);
}

logMessage("Hello, TS"); // Если навестись на logMessage, то можно увидеть, что без return функция возвращает тип void
// Таким образом можно вручную задать тип возврата void. Для нас это будет значить, что даже если позже мы попытаемся что то вернуть из функции, нам выдаст ошибку

// ------------------------------- CHALLENGE ---------------------------------------

function processInput(union: string | number) {
  if (typeof union == "number") {
    return union * 2;
  } else {
    if (typeof union == "string") {
      return union.toUpperCase();
    }
    return "Wrong type of parameter";
  }
}

console.log(processInput(5));
console.log(processInput("should be uppercase"));
console.log(processInput(true)); // Ошибка, даже если я хочу что то выводить при неправильном типе, чтобы это вообще компилировалось, все равно тогда надо указать "неправильные типы"
