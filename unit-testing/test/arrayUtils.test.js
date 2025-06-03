import { describe, expect, it } from "vitest";
import {
  flattenArray,
  intersection,
  removeDuplicates,
} from "../src/arrayUtils";

describe("Array Utils", () => {
  it("should flatten an array", () => {
    expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flattenArray([1, [2, 3], [4, [5, 6]], [7, [8, 9]]])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("should handle non-array inputs", () => {
    expect(flattenArray("not an array")).toBe("not an array");
    expect(flattenArray(123)).toBe(123);
  });

  it("should find the intersection of two arrays", () => {
    expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });

  it("should remove duplicates from an array", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
