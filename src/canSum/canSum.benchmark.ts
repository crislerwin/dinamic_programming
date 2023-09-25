import * as bench from "benny";
import { canSum } from "./canSum";

bench.suite(
  "Can Sum",
  bench.add("Slow CanSum", () => {
    canSum(8, [2, 3, 5]);
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
