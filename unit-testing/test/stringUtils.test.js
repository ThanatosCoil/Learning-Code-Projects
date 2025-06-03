import { describe, expect, it } from "vitest";
import {
  capitalizeWords,
  isPalindrome,
  reverseString,
} from "../src/stringUtils";

describe("String Utils", () => {
  it("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("")).toBe("");
    expect(reverseString("Bob got a new car!")).toBe("!rac wen a tog boB");
  });

  it("should capitalize words in a string", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
    expect(capitalizeWords("")).toBe("");
    expect(capitalizeWords("bOB GoT A neW car!")).toBe("BOB GoT A NeW Car!");
  });

  it("should check if a string is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello world")).toBe(false);
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });
});
