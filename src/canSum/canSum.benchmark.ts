import * as bench from "benny";
import { canSum, memoizedCanSum } from "./canSum";

bench.suite(
  "Can Sum",
  bench.add("🐌 CanSum", () => {
    canSum(100, [7, 14]);
  }),
  bench.add("🚀 CanSum", () => {
    memoizedCanSum(100, [7, 14]);
  }),
  bench.cycle(),
  bench.complete(),
  bench.save({
    file: "cansum_benchmark",
    version: "1.0.0",
    folder: "src/canSum",
    format: "chart.html",
  })
);
