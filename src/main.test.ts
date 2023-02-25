import { test, expect } from "@jest/globals";
import { sum } from "./main";

test("1 + 2는 3", () => {
  expect(sum(1, 2)).toBe(3);
});
