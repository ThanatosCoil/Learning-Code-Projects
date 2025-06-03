//-------------------------------------- Перечисления -----------------------------

enum ServerResponseStatus { // В enum храним константы которые потом будем использовать
  Success,
  Error,
}

console.log(ServerResponseStatus);
// Они по порядку приравниваются к 0, 1 и т.д. по дефолту и они же но поменявшись местами

enum ServerResponseStatus2 {
  Success = 200,
  Error = 500,
}

console.log(ServerResponseStatus2);
// Или приравнять их к чему то, но когда мы приравниваем к числам, то мы получаем объект значений и значений но поменявшихся местами

Object.values(ServerResponseStatus2).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  } else {
    console.log(value);
  }
});
// Таким образом получаем доступ к тому или иному значению

enum ServerResponseStatus3 {
  Success = "Success",
  Error = "Error",
}

console.log(ServerResponseStatus3);
// А вот если приравняли не к числу, то получаем ровно 2 значения

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();
response;

//--------------------------------------------------

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "Value",
}

let numericEnumValue: NumericEnum = 1; // Так можно, из за того что у нас реверснутые значения есть
console.log(numericEnumValue); // 1

let stringEnumValue: StringEnum = "Value"; // А так нельзя

// -------------------------------- CHALLENGE -----------------------------

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 1,
  name: "Sasha",
  role: UserRole.Admin,
  contact: ["Sasha.gmail.com", "213-424-4242"],
});

user;
