import { describe, expect, it } from "vitest";
import { fetchData } from "../src/asyncTest";

describe("fetchData", () => {
  it("Should fetch data", async () => {
    const data = await fetchData();
    expect(data).toBe("Data fetched");
  });
});
