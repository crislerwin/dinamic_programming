import { table } from 'template-literal-table';
import { it, describe, expect } from 'vitest';
import { howSum } from './howSum';

const cases = table`
    targetSum    |  numbers     | expected
    ${7}         | ${[2, 3]}    | ${[3, 2, 2]}
    ${7}         | ${[5, 3, 4]} | ${[4, 3]}
    ${7}         | ${[2, 4]}    | ${null}
    ${8}         | ${[2, 3, 5]} | ${[2, 2, 2, 2]}
    ${300}       | ${[7, 14]}   | ${null}
`;

describe('howSum()', () => {
  it.each(cases)(
    'howSum(%s, %s) should be %s',
    ({ targetSum, numbers, expected }) => {
      expect(howSum(targetSum as number, numbers as number[])).toEqual(
        expected,
      );
    },
  );
});
