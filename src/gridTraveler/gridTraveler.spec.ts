import { table } from 'template-literal-table';
import { describe, it, expect } from 'vitest';
import { memoizedGridTraveler, gridTraveler } from './gridTraveler';

const testCases = table`
    gridWidth   | gridHeight     | expected
    ${1}        | ${1}           | ${1}
    ${2}        | ${2}           | ${2}
    ${2}        | ${3}           | ${3}
    ${3}        | ${3}           | ${6}
`;

//  ${18}       |${18}           | ${2333606220} is extremely slow

describe('Grid Traveler', () => {
  it.each(testCases)(
    'Memoized Grid Traveler tests',
    ({ gridHeight, gridWidth, expected }) => {
      expect(
        memoizedGridTraveler(gridWidth as number, gridHeight as number),
      ).toEqual(expected);
    },
  );
  it.each(testCases)(
    'Grid Traveler tests',
    ({ gridHeight, gridWidth, expected }) => {
      expect(gridTraveler(gridWidth as number, gridHeight as number)).toEqual(
        expected,
      );
    },
  );
});
