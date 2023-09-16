import * as bench from "benny";

// Different ways to do the same thing

interface Fib {
  slugFib(n: number): number;
  carriageFib(n: number, memo: Record<number, number>): number;
  rocketFib(n: number): number;
}

export class Fibonacci implements Fib {
  slugFib(n: number): number {
    if (n <= 2) return 1;
    return this.slugFib(n - 1) + this.slugFib(n - 2);
  }

  carriageFib(n: number, memo: Record<number, number> = {}): number {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = carriageFib(n - 1, memo) + this.carriageFib(n - 2, memo);
    return memo[n];
  }

  rocketFib(n: number): number {
    if (n <= 2) return 1;
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

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

bench.suite(
  "Functional Fibonacci",

  bench.add("Fib Impl 1", () => {
    slugFib(21);
  }),

  bench.add("Fib Impl 2", () => {
    carriageFib(21);
  }),

  bench.add("Fib Impl 3", () => {
    rocketFib(21);
  }),

  bench.cycle(),
  bench.complete(),
  bench.save({ file: "fib", version: "1.0.0" }),
  bench.save({ file: "fib", format: "chart.html" })
);

const fibonacci = new Fibonacci();
bench.suite(
  "Class Fibonacci",
  bench.add("🐛 Slug Fib", () => {
    fibonacci.slugFib(21);
  }),
  bench.add("🐴 Carriage Fib", () => {
    fibonacci.carriageFib(21);
  }),
  bench.add("🚀 Rocket Fib", () => {
    fibonacci.rocketFib(21);
  }),

  bench.cycle(),
  bench.complete(),
  bench.save({ file: "oofib", version: "1.0.0" }),
  bench.save({ file: "oofib", format: "chart.html" })
);
