import * as bench from "benny";
import { gridTraveler, memoizedGridTraveler } from "./gridTraveler";

bench.suite(
  "GridTraveler",
  bench.add("recursivegridTraveler", () => {
    gridTraveler(3, 3);
  }),
  bench.add("memoizedgridTraveler", () => {
    memoizedGridTraveler(3, 3);
  }),
  bench.cycle(),
  bench.complete(),
  bench.save({
    file: "gridTraveler",
    version: "1.0.0",
    format: "chart.html",
  })
);
