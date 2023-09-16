export const slugFib = (n: number): number => {
  if (n <= 2) return 1;
  return slugFib(n - 1) + slugFib(n - 2);
};

export const carriageFib = (
  n: number,
  memo: Record<number, number> = {}
): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = carriageFib(n - 1, memo) + carriageFib(n - 2, memo);
  return memo[n];
};

export const rocketFib = (n: number): number => {
  if (n <= 2) return 1;
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};
