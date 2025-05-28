import { expect, it } from "vitest";

//toBe: проверяет, что значение равно другому значению (строгое сравнение)
it("toBe matcher", () => {
  expect(1).toBe(1);
});

//toEqual: проверяет, равность значений у объектов и массивов не по референсу, а по реальной структуре и значениям
it("toEqual matcher", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj1).toEqual(obj2);
});

//toStrictEqual: проверяет, равность значений у объектов и массивов не по референсу, а по реальной структуре и значениям, но учитывает undefined, функции, типы объектов
it("toStrictEqual matcher", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj1).toStrictEqual(obj2);
});

//toBeTruthy: проверяет, что значение истинно (true, 1, "string", {}, [], function, object)
it("toBeTruthy matcher", () => {
  expect(1).toBeTruthy();
});

//toBeFalsy: проверяет, что значение ложно (false, 0, null, undefined, NaN, "")
it("toBeFalsy matcher", () => {
  expect("").toBeFalsy();
});

//toBeGreaterThan: проверяет, что значение больше другого значения
it("toBeGreaterThan matcher", () => {
  expect(2).toBeGreaterThan(1);
});

//toBeLessThan: проверяет, что значение меньше другого значения
it("toBeLessThan matcher", () => {
  expect(1).toBeLessThan(2);
});

//toBeGreaterThanOrEqual: проверяет, что значение больше или равно другому значению
it("toBeGreaterThanOrEqual matcher", () => {
  expect(2).toBeGreaterThanOrEqual(2);
});

//toBeLessThanOrEqual: проверяет, что значение меньше или равно другому значению
it("toBeLessThanOrEqual matcher", () => {
  expect(2).toBeLessThanOrEqual(2);
});

//toContain: проверяет, что значение содержит другое значение
it("toContain matcher", () => {
  expect([1, 2, 3]).toContain(2);
  expect("hello").toContain("e");
});

//toMatch: проверяет, что значение соответствует регулярному выражению
it("toMatch matcher", () => {
  expect("hello").toMatch(/h/);
});

//toHaveProperty: проверяет, что объект имеет свойство
it("toHaveProperty matcher", () => {
  const obj = { a: 1, b: 2 };
  expect(obj).toHaveProperty("b");
});

//toBeDefined: проверяет, что значение определено
it("toBeDefined matcher", () => {
  const obj = { a: 1, b: 2 };
  expect(obj.a).toBeDefined();
});

//toBeUndefined: проверяет, что значение не определено
it("toBeUndefined matcher", () => {
  const obj = { a: 1, b: 2 };
  expect(obj.c).toBeUndefined();
});
