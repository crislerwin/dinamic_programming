import { table } from "template-literal-table";
import { describe, expect, it } from "vitest";
import { canSum } from "./canSum";

const cases = table`
    targetSum | numbers          | expectedResult
    ${7}      | ${[2, 3]}        | ${true}
    ${7}      | ${[5, 3, 4, 7]}  | ${true}
    ${7}      | ${[2, 4]}        | ${false}
    ${8}      | ${[2, 3, 5]}     | ${true}
    ${300}    | ${[7, 14]}       | ${false}
    `;

describe("Can Sum", () => {
  it.each(cases)(
    "canSum($targetSum, $numbers) = $expectedResult",
    ({ targetSum, numbers, expectedResult }) => {
      expect(canSum(targetSum as number, numbers as number[])).toBe(
        expectedResult
      );
    }
  );
});
