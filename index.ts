import { Elysia } from "elysia";

const gridTravelerChart = Bun.file(
  "src/gridTraveler/gridtraveler_benchmark.chart.html"
);
const fibonacciChart = Bun.file("src/fibonacci/fibonacci_benchmark.chart.html");
const canSumChart = Bun.file("src/canSum/cansum_benchmark.chart.html");

const homeFile = Bun.file("index.html");
const app = new Elysia();

app.get("/", () => homeFile);
app.get("/gridtraveler", () => gridTravelerChart);
app.get("/fibonacci", () => fibonacciChart);
app.get("/cansum", () => canSumChart);

const PORT = 3000;

app.listen(PORT);

console.log(`Listening  on port ${PORT}`);
