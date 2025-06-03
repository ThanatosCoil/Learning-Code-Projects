//-------------------------------------- Защита типов -----------------------------
// Защита типа — это термин в TypeScript, который означает возможность сузить тип объекта в определенной области
// Обычно это делается с помощью условных операторов, проверяющих тип объекта
// В контексте TypeScript защита типа — это некоторое выражение, выполняющее проверку во время выполнения, гарантирующую тип в некоторой области.

// ------------------------------ CHALLENGE 1 "typeof" guard --------------------------

type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return `boolean: ${value}`;
}

console.log(checkValue(value));

// ------------------------------ CHALLENGE 2 Equality Narrowing ------------------------------

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

// ------------------------------ CHALLENGE 3 check for property ---------------------------------

type Doggy = { type: "dog"; name: string; bark: () => void };
type Cattty = { type: "cat"; name: string; meow: () => void };
type Beast = Dog | Cat;

function makeNoise(animal: Beast) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// ------------------------------ CHALLENGE 4 Truthy"/"Falsy" guard ------------------------------------

function printLength(str: string | null | undefined) {
  if (str) {
    return str.length;
  } else {
    return "No string provided";
  }
}

console.log(printLength("TypeScript"));
console.log(printLength(""));

// ------------------------------ CHALLENGE 5 "instanceof" type guard ------------------------------------

function checkInput(input: Date | string) {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  } else {
    return input.toLowerCase();
  }
}

console.log(checkInput("Twenty forty five"));
const date = new Date();
console.log(checkInput(date));

// ------------------------------ CHALLENGE 6 Type Predicate ------------------------------------

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Sleep") };
};

const person = randomPerson();
person;

function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}
if (isStudent(person)) {
  person.study();
} else {
  person.login();
}

// ------------------------------ CHALLENGE 7 Discriminated Unions and exhaustive check using the never type ------------

type IncrementAction = {
  state: "Increase";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  state: "Decrease";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.state) {
    case "Increase":
      return state + action.amount;
    case "Decrease":
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Enuxpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(10, {
  user: "Sasha",
  state: "Increase",
  timestamp: 4242,
  amount: 5,
});
newState;
