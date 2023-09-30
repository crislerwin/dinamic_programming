export const gridTraveler = (m: number, n: number): number => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

export const memoizedGridTraveler = (
  m: number,
  n: number,
  memo: Record<string, number> = {},
): number => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] =
    memoizedGridTraveler(m - 1, n, memo) + memoizedGridTraveler(m, n - 1, memo);

  return memo[key];
};
