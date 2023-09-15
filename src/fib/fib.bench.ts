import * as b from "benny";
import { fib2, fib3, fib } from "./fib";

b.suite(
  "Fibonacci",

  b.add("Fib Impl 1", () => {
    fib(21);
  }),

  b.add("Fib Impl 2", () => {
    fib2(21);
  }),

  b.add("Fib Impl 3", () => {
    fib3(21);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "fib", version: "1.0.0" }),
  b.save({ file: "fib", format: "chart.html" })
);
