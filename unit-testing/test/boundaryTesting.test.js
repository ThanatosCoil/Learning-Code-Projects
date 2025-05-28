import { describe, expect, it } from "vitest";
import { validatePassword } from "../src/boundaryTesting";

describe("boundaryTesting", () => {
  it("Should validate password length", () => {
    expect(validatePassword("1234567890")).toBe("Password is valid");
  });
  it("Should throw an error if password length is less than 8", () => {
    expect(() => validatePassword("short")).toThrowError(
      "Password must be between 8 and 16 characters long"
    );
  });
  it("Should throw an error if password length is greater than 16", () => {
    expect(() =>
      validatePassword("longpassword12345678901234567890")
    ).toThrowError("Password must be between 8 and 16 characters long");
  });
  it("Should allow password if its length is equal to 16", () => {
    expect(validatePassword("password12345678")).toBe("Password is valid");
  });
  it("Should allow password if its length is equal to 8", () => {
    expect(validatePassword("password")).toBe("Password is valid");
  });
});
