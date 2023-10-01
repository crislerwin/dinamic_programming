import { Elysia } from 'elysia';

const app = new Elysia();

app.get('/', () => Bun.file('index.html'));
app.get('/gridtraveler', () =>
  Bun.file('src/gridTraveler/gridtraveler_benchmark.chart.html'),
);
app.get('/fibonacci', () =>
  Bun.file('src/fibonacci/fibonacci_benchmark.chart.html'),
);
app.get('/cansum', () => Bun.file('src/canSum/cansum_benchmark.chart.html'));
app.get('/howsum', () => Bun.file('src/howsum/howsum_benchmark.chart.html'));
app.get('/bestsum', () => Bun.file('src/bestsum/bestsum.chart.html'));

const PORT = 3000;

app.listen(PORT);

console.log(`Listening  on port ${PORT}`);
