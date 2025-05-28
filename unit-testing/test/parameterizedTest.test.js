import { describe, expect, it } from "vitest";
import { multiply } from "../src/parameterizedTest";

describe("parameterizedTest", () => {
  it.each([
    [2, 3, 6], //2*3=6
    [4, 5, 20],
    [0, 10, 0],
    [-2, 5, -10],
  ])("Should multiply %d and %d to get %d", (a, b, expected) => {
    expect(multiply(a, b)).toBe(expected);
  });
});
