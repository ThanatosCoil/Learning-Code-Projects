import { describe, expect, it } from "vitest";
import { add } from "../src/testDrivenDev";

//First you write a test, then you write the code to pass the test
describe("add function", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
