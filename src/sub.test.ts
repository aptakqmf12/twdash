import { group } from "./main";

test("groupBy 실행", () => {
  expect(group([1, 2, 3, 4, 5, 6], (n) => (n % 2 === 0 ? "짝수" : "홀수"))).toStrictEqual({
    홀수: [1, 3, 5],
    짝수: [2, 4, 6],
  });
});
