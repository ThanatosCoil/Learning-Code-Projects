import { describe, expect, it } from "vitest";
import {
  add,
  divide,
  factorial,
  fibonacci,
  gcd,
  multiply,
  subtract,
} from "../src/mathUtils";

describe("Math Utils", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });

  it("should subtract two numbers", () => {
    //Arrange: Setup data
    const a = 5;
    const b = 3;

    //Act: Perform action
    const result = a - b;

    //Assert: Check result
    expect(result).toBe(2);

    expect(subtract(-1, -1)).toBe(0);
  });

  it("should multiply two numbers", () => {
    expect(multiply(5, 3)).toBe(15);
    expect(multiply(-1, -1)).toBe(1);
  });

  it("should divide two numbers", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(5, 2)).toBe(2.5);
  });

  it("should handle division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  it("should calculate factorial of a number", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
  });

  it("should handle negative numbers for factorial", () => {
    expect(() => factorial(-1)).toThrow(
      "Factorial is not defined for negative numbers"
    );
  });

  it("should calculate gcd of two numbers", () => {
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(7, 5)).toBe(1);
    expect(gcd(10, 0)).toBe(10);
  });

  it("should calculate fibonacci of a number", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(10)).toBe(55);
  });

  it("should handle negative numbers for fibonacci", () => {
    expect(() => fibonacci(-1)).toThrow(
      "Fibonacci is not defined for negative numbers"
    );
  });
});
