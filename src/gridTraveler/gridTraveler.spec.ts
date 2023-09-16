import { table } from "template-literal-table";
import { describe, it, expect } from "vitest";
import { gridTraveler } from "./gridTraveler";

const testCases = table`
    gridWidth   | gridHeight     | expected
    ${1}        | ${1}           | ${1}
    ${2}        | ${2}           | ${2}
    ${2}        | ${3}           | ${3}
    ${3}        | ${3}           | ${6}
    ${3}        | ${4}           | ${10}
`;

describe("Grid Traveler", () => {
  it.each(testCases)(
    "should return %s",
    ({ gridHeight, gridWidth, expected }) => {
      expect(gridTraveler(gridWidth as number, gridHeight as number)).toEqual(
        expected
      );
    }
  );
});
