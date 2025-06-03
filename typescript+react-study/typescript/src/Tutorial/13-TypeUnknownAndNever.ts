//-------------------------------------- Неизвестный тип -----------------------------
// Это все равно, что сказать, что переменная может быть чем угодно, но нам нужно выполнить некоторую проверку типов, прежде чем мы сможем ее использовать.

let unknowValue: unknown;

unknowValue = "hello world";
unknowValue = [1, 2, 3];
unknowValue = 42.3345;

unknowValue.toFixed(2); // А вот тут ошибка, потому что тип может быть любым для TS

if (typeof unknowValue === "number") {
  unknowValue.toFixed(2); // А вот так все хорошо, потому что выполнили проверку типа и TS знает что тут будет только число
}

// Unknown точно есть в try catch. В catch у ошибки тип unknown

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("there was error...");
  } else {
    throw "some error";
  }
}

// try {
//   runSomeCode();
// } catch (error) {
//   console.log(error.message); // Ругается из за типа unknown. Такой тип здесь потому что мы можем кинуть вручную ошибку, и кинуть можем что угодно.
// }

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    // Поэтому проверяем является ли ошибка экземпляром Error
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// ------------------------------------- ТИП НИКОГДА ----------------------
// Представляет собой тип значения которые никогда не произойдут. Нельзя присвоить никакого значения переменной такого типа
// TS выдаст ошибку компилирования при каких то случаях, которые ты мог не предвидеть, с ними может помочь такой тип

let someValue: never = 0; // Ошибка

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light theme enabled");
    return;
  }
  if (theme === "dark") {
    // TS умный, уже тут он понимает что только дарк остался
    console.log("dark theme enabled");
    return;
  }
  theme; // И вот после двух условий TS знает что больше нет значений и он сам присвоил theme тип never
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    default:
      //Во время запуска кода
      throw new Error("Unexpected color");
      //Во время разработки
      let unexpectedColor: never = color; // Вот так он ругается прямо сразу, потому что ловит невыполнимый случай Green
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green)); // Ошибок нигде не было, но логично получаем ошибку после запуска кода
