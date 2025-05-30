//-------------------------------------- ОБЪЕКТЫ КАК ПАРАМЕТРЫ -----------------------------

function createEmployee({ id }: { id: number }): {
  // Есть лучшее решение для задания типов, но пока вот так
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
first;
const second = createEmployee({ id: 2 });
second;

// ----------------------------- АЛЬТЕРНАТИВА ------------------------------

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the School ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: "anna",
  email: "anna@gmail.com",
};

createStudent(newStudent);
createStudent({ id: 1, name: "bob" }); // Так все впорядке
createStudent({ id: 1, name: "sasha", email: "sasha@gmail.com" }); // Ругается, потому что хоть и email есть в объекте, в функции его нет, TS такое принимать не хочет

// ---------------------------- CHALLENGE ----------------------------

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false } // Задаем дефолтное значение для объекта
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    if (typeof input === "string" && config.reverse == true) {
      return input.split("").reverse().join("");
    } else {
      return input.toUpperCase();
    }
  }
}

console.log(processData(5));
console.log(processData("Let live together"));
console.log(processData("Lets not live together", { reverse: true }));
