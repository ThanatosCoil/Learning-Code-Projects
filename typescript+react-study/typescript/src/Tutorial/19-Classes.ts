//-------------------------------------- Синтаксис классов -----------------------------
// Классы в JavaScript — это шаблон для создания объектов. Они инкапсулируют данные с кодом для манипулирования этими данными. Классы в JavaScript поддерживают наследование и могут использоваться для создания более сложных структур данных.
// Конструктор в классе — это специальный метод, который вызывается при создании нового экземпляра класса. Он часто используется для установки начального состояния объекта.

class Book {
  title: string; // Да, надо так задавать типы до конструктора
  public author: string; // Можно написать public, но смысла нет, т.к. это поведение по дефолту
  private checkedOut: boolean = false; // Дефолтное значение приватное значение (т.е. к нему нельзя получить доступ вне поля видимости)

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }
  isCheckedOut() {
    return this.checkedOut;
  }
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork = new Book("deep work ", "cal newport");
deepWork.checkOut();
console.log(deepWork.isCheckedOut());

// Более короткая запись
// В TypeScript, если вы хотите использовать сокращенную запись для создания и инициализации свойств класса в конструкторе, вам необходимо использовать модификаторы доступа public, private или protected.

class Book1 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {
    // Объявляя так, не требуется этого делать перед конструктором
  }
}

// Геттеры и сеттеры
// Геттеры и сеттеры — это специальные методы в классе, которые позволяют контролировать, как осуществляется доступ к свойству и как оно изменяется. Они используются как свойства, а не как методы, поэтому для их вызова не используются скобки.

class Book2 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
  get checkOut() {
    return this.checkedOut;
  }
  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork2 = new Book2("deep work", "cal newport");
console.log(deepWork2.info);
// deepWork.checkOut = true;
console.log(deepWork2.someInfo);
console.log(deepWork2.checkOut);

// Интерфейс с классами

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  // Implements обещает что в классе будут все переменные и методы описанные в интерфейсе
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const person = new Person("Sasha", 30);
person;
