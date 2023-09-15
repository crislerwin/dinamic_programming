// First Implementation of Fibonacci with horrible performance
const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// Second Implementation of Fibonacci with memo
export const memoizedFib = (
  n: number,
  memo: Record<number, number> = {}
): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
};

export const fib2 = (n: number): number => {
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
