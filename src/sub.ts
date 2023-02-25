import { sum, group } from "./main";

sum(1, 2);
group([1, 2, 3, 4, 5, 6], (n) => (n % 2 === 0 ? "짝수" : "홀수"));
