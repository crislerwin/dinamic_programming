import { describe, expect, it } from "vitest";
import { carriageFib, rocketFib } from "./fibonacci";
import { table } from "template-literal-table";

const cases = table`
input  | expectedResult
${6}   | ${8}   
${7}   | ${13} 
${8}   | ${21} 
${50}  | ${12586269025}
`;

describe("Fib", () => {
  describe("Rocket Fib", () => {
    it.each(cases)(
      "fib($input) = $expectedResult",
      ({ input, expectedResult }) => {
        expect(rocketFib(input as number)).toEqual(expectedResult);
      }
    );
  });
  describe("Carriage Fib", () => {
    it.each(cases)(
      "fib(input) = $expectedResult",
      ({ input, expectedResult }) => {
        expect(carriageFib(input as number)).toEqual(expectedResult);
      }
    );
  });
});
