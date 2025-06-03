//-------------------------------------- Интерфейс -----------------------------
// Конкерент TypeAllias в задаче типов.  ТОЛЬКО ДЛЯ ОБЪЕКТОВ!

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // Метод
  printAuthor(): void;
  printTitle(message: string): string;
  // Странный подход, который тем не менее можно встретить
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "Metamorphoses",
  author: "Ovid",
  genre: "Poem",
  printAuthor() {
    console.log(this.author);
  },

  //   // А можно задать как свойство
  //   printAuthor:() => {
  //     console.log(deepWork.author); // Почему здесь нет this? Потому что стрелочная функция получает доступ к глобальной зоне видимости, в то время как обычная функция, к области видимости самой функции
  //   }

  printTitle(message) {
    return `${this.title} ${message}`;
  },

  //   // Первый способ
  //   printSomething: function (someValue) {
  //     return someValue;
  //   },

  //   // Второй способ
  //   printSomething: (someValue) => {
  //     console.log(deepWork.author);

  //     return someValue;
  //   },

  // Третий способ
  printSomething(someValue) {
    return someValue;
  },
};

deepWork.printAuthor();

console.log(deepWork.printTitle("is awesome book"));

console.log(deepWork.printSomething(25));

// ----------------------------------- CHALLENGE ---------------------------

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(value: number): number;
}

const comp: Computer = {
  id: 100,
  brand: "Intel",
  ram: 1024,
  upgradeRam(value) {
    return (this.ram += value);
  },
};

console.log(comp.ram);
comp.upgradeRam(1024);
console.log(comp.ram);
comp.storage = 300;
console.log(comp.storage);

// ----------------------- СОЕДИНЕНИЕ РАСШИРЕНИЕ TypeGuard ------------

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  // Соединяем два Person, добавляя свойство age
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface Employee extends Person {
  // Создаем новый интерфейс Employee, расширяя его существующим Person
  employeeId: number;
}

const employee: Employee = {
  name: "Jane",
  age: 32,
  employeeId: 100,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, ID: ${this.employeeId}`;
  },
};

interface Manager extends Person, DogOwner {
  // Расширяем сразу несколькими интерфейсами
  managePeople(): void;
}

const manager: Manager = {
  name: "Bob",
  age: 35,
  dogName: "Rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name of dog: ${this.dogName}`;
  },
  managePeople() {
    console.log("Manage people");
  },
};

console.log(person.getDetails());
console.log(employee.getDetails());
console.log(manager.getDogDetails());

// ------------------------------------ CHALLENGE ------------------------

interface Personc {
  name: string;
}

interface DogOwnerc extends Person {
  dogName: string;
}

interface Managerc extends Person {
  managePeople(): void;
  delegateTask(): void;
}

function getEmployee(): Personc | DogOwnerc | Managerc {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return {
      name: "john",
    };
  } else if (randomNumber < 0.66) {
    return {
      name: "sarah",
      dogName: "Rex",
    };
  } else {
    return {
      name: "bob",
      managePeople: () => console.log("Managing people..."),
      delegateTask: () => console.log("Delegating tasks..."),
    };
  }
}

const employeeC: Personc | DogOwnerc | Managerc = getEmployee();
console.log(employeeC);

function isManager(obj: Personc | DogOwnerc | Managerc): obj is Managerc {
  // Особый вид возврата, который утверждает что аргумент будет определенного типа
  return "managePeople" in obj;
}

console.log(isManager(employeeC));

if (isManager(employeeC)) {
  // Теперь ТС знает что как только аргумент пройдет это условие, объект точно будет типа Managerc. Без особого возврата, он бы выдавал ошибку.
  employeeC.delegateTask();
}

// Так в чем же разница?
// Interface только для объектов ТОЧКА. Allias можно с примитивами, задавать конкретное значение на выходе и т.д
// Интерфейсы можно соединять и расширять. Allias так не могут, точнее немного расширить их можно, но другим синтаксисом
// Интерфейсы можно использовать при работе с классами.
// Вычисляемые свойства можно делать только с Allias.
