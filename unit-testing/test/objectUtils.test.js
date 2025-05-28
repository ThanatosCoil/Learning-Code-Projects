import { describe, expect, it } from "vitest";
import { deepClone, deepMerge, flattenObject } from "../src/objectUtils";

describe("Object Utils", () => {
  it("should deep merge two objects", () => {
    expect(deepMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 } })).toEqual({
      a: 1,
      b: { c: 2, d: 3 },
    });
  });

  it("should deep clone an object", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  it("should flatten an object", () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const flattenedObj = flattenObject(obj);
    expect(flattenedObj).toEqual({ a: 1, "b.c": 2, "b.d.e": 3 });
  });
});
