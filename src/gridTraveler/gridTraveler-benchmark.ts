import * as bench from 'benny';
import { gridTraveler, memoizedGridTraveler } from './gridTraveler';

bench.suite(
  'GridTraveler',
  bench.add('recursivegridTraveler', () => {
    gridTraveler(12, 12);
  }),
  bench.add('memoizedgridTraveler', () => {
    memoizedGridTraveler(12, 12);
  }),
  bench.cycle(),
  bench.complete(),
  bench.save({
    file: 'gridtraveler_benchmark',
    version: '1.0.0',
    folder: 'src/gridTraveler',
    format: 'chart.html',
  }),
);
