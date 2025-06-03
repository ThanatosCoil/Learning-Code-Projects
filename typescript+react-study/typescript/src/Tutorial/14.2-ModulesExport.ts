export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let person = "sasha";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "Oleg",
  age: 25,
};

export default newStudent;
