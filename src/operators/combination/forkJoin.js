import { fromEvent, timer, interval, forkJoin, of } from 'rxjs';
import observer from '../../observers';

// forkJoin类似于Promise.all，只有所有传入的Observable完结了，才会输出值，
// 并且输出的是所有Observable最后一个值组成的数组

const source1$ = of(1, 2, 3);
const source2$ = timer(1500);
const source3$ = timer(1000);

forkJoin( source1$, source2$, source3$).subscribe(observer);

// 1.5秒后输出
// [3, 0, 0]
// complete!

// 如果传入了一个永不完结的Observable，比如interval，或者fromEvent事件，那么永远不会有输出值
