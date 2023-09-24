import * as bench from "benny";
import { carriageFib, rocketFib, slugFib } from "./fibonacci";

bench.suite(
  "Fibonacci",
  bench.add("🐛 Slug Fib", () => {
    slugFib(21);
  }),
  bench.add("🐴 Carriage Fib", () => {
    carriageFib(21);
  }),
  bench.add("🚀 Rocket Fib", () => {
    rocketFib(21);
  }),

  bench.cycle(),
  bench.complete(),
  bench.save({ file: "fib", version: "1.0.0", format: "chart.html" })
);
