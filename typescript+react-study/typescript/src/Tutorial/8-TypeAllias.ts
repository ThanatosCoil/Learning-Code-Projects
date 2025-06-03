//-------------------------------------- ПОМОШНИК С ТИПАМИ -----------------------------

type User = { id: number; name: string; isActive: boolean }; // Задаем тип, который будем переиспользовать. Его можно экспортировать в другой файл.

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// -----------------------------------------------------------------

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 123;

// -----------------------------------------------------------------

type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark"); // Возможно только light или dark.

// ---------------------- ОБЪЕДИНЕНИЕ ТИПОВ ------------------------------------

type Book = { id: number; name: string; price: number };

const book1: Book = {
  id: 1,
  name: "Game of Thrones",
  price: 15,
};

const book2: Book = {
  id: 2,
  name: "Crime and Punishment",
  price: 10,
};

const discountedBook2: Book & { discount: number } = {
  // Добавили дополнительный тип к существующему
  id: 3,
  name: "Lord of the Ring",
  price: 7,
  discount: 0.15,
};

// ------------------------------- ВЫЧИСЛЯЕМЫЕ СВОЙСТВА -------------------------

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
// ----------------------------------- CHALLENGE ---------------------------------

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

function printStaffDetails(worker: Staff) {
  if ("employees" in worker) {
    return `${worker.name} is a Manager with ${worker.employees.length} employees`;
  } else {
    return `${worker.name} is an Employee in ${worker.department} department`;
  }
}

let Alice: Employee = {
  id: 1,
  name: "Alice",
  department: "Sales",
};

let Steve: Employee = {
  id: 2,
  name: "Steve",
  department: "Advertising",
};

let Bob: Manager = {
  id: 3,
  name: "Bob",
  employees: [Alice, Steve],
};

console.log(printStaffDetails(Alice));
console.log(printStaffDetails(Steve));
console.log(printStaffDetails(Bob));
