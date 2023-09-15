import * as bench from "benny";

// First Implementation of Fibonacci with horrible performance

export const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// Second Implementation of Fibonacci with memo
export const fib2 = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
};

export const fib3 = (n: number): number => {
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

// bench.suite(
//   "Fibonacci",

//   bench.add("Fib Impl 1", () => {
//     fib(21);
//   }),

//   bench.add("Fib Impl 2", () => {
//     fib2(21);
//   }),

//   bench.add("Fib Impl 3", () => {
//     fib3(21);
//   }),

//   bench.cycle(),
//   bench.complete(),
//   bench.save({ file: "fib", version: "1.0.0" }),
//   bench.save({ file: "fib", format: "chart.html" })
// );
