import * as b from "benny";
import { fib2, fib3, fib } from "./fib";

b.suite(
  "Fibonacci",

  b.add("Simple Recursive Fib", () => {
    // Don't run with large numbers, with 21 it takes a long time
    fib(32);
  }),

  b.add("Memoized Fib", () => {
    fib2(50);
  }),

  b.add("Improved Fib", () => {
    fib3(50);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "fib", version: "1.0.0" }),
  b.save({ file: "fib", format: "chart.html" })
);
