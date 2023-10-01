import * as bench from 'benny';
import { howSum, memoizedhowsum } from './howSum';

bench.suite(
  'HowSum Benchmark',
  bench.add('howSum', () => {
    howSum(300, [7, 14]);
  }),
  bench.add('memoizedhowSum', () => {
    howSum(12, [7, 14]);
  }),
  bench.cycle(),
  bench.complete(),
  bench.save({
    file: 'howsum_benchmark',
    version: '1.0.0',
    folder: 'src/howSum',
    format: 'chart.html',
  }),
);
