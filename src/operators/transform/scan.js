import { of, fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';
import observer from '../../observers';

// 两个参数，
// 第一个参数是function，有点类似于reduce函数，有三个形参(累计值，当前值，下标索引）
// 第二个参数是起始值

// scan用来统计一些需要记住数值，不需要额外声明一个变量来计数

const source1$ = of(1,2,3);
source1$.pipe(
    scan((seed, value, index) => {
        return (seed + value) * index
    }, 0)
).subscribe(observer);

// 0   (0 + 1) * 0
// 2   (0 + 2) * 1
// 10   (2 + 3) * 2
// complete!

const source2$ = fromEvent(document, 'click');
source2$.pipe(
    scan((seed) => {
        return seed + 1
    }, 0)
).subscribe(observer);

// 每次点击时触发，统计点击次数
// 1
// 2
// ...
