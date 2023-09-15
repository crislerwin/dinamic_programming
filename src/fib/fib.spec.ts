import { describe, expect, it } from "vitest";
import { memoizedFib, fib2 } from "./fib";
import { table } from "template-literal-table";

const cases = table`
input  | expectedResult
${6}   | ${8} 
${7}   | ${13}
${8}   | ${21}
${50}  | ${12586269025}
`;

describe("Fib", () => {
  describe("Fibonacci", () => {
    it.each(cases)("fib(%s) = %s", ({ input, expectedResult }) => {
      expect(fib2(input as number)).toEqual(expectedResult);
    });
  });
  describe("Memoized Fib", () => {
    it.each(cases)("fib(%s) = %s", ({ input, expectedResult }) => {
      expect(memoizedFib(input as number)).toEqual(expectedResult);
    });
  });
});
