import { interval, of } from 'rxjs';
import { combineLatest, take } from 'rxjs/operators';
import observer from '../../observers';


const source3$ = of(1, 2, 3, 4);
const source4$ = of(2, 3, 4, 5);

source3$.pipe(
    combineLatest(source4$),
).subscribe(observer);

// [4, 2]
// [4, 3]
// [4, 4]
// [4, 5]
// complete!

// 这里source3$会瞬间执行完，最新的值就是最后一个4，因为是同步的，所以组合出来第一个数一直是4

const source1$ = interval(1000);
const source2$ = interval(2000);

source1$.pipe(
    combineLatest(source2$),
    take(4)
).subscribe(observer);

// (2s后打印)
// [1, 0]
// (1s 间隔)
// [2, 0]
// (1s 间隔)
// [3, 0] 瞬间再打出 [3, 1]
// complete!

// 理论上在4秒的时候应该是直接打出[3, 1]，因为interval是同一个时间线上，4秒的时候，source1$和source2$应该都会输出一个值，这是同时发生的
// 但是这里却被分成了两步，有了先后顺序（两个事件之间间隔大概在几纳秒左右），所以会输出两个

// 如果要解决这个问题，可以用withLatestFrom

// 关于combineLatest和withLatestFrom的区别，我理解的是，combineLatest重点在于传入的source2$（如果传入多个要合并的，那么重点在于传入的最后一个source$），节奏由它来控制，
// 比如第一个例子中，source1$会瞬间执行完，然后依次按source2$执行
// 再比如第二个例子中，当时间点到4秒的时候，2个source$都会产生数据，但这时候因为source2$有短暂的时延，所以导致source1$会先出一个，接着source2$再出

// 而withLatestFrom重点在于source1$，具体细节可参考withLatestFrom.js



// 第二个参数可选，表示输出的值的投射函数，可传参数依次是source$输出的值，按顺序

source3$.pipe(
    combineLatest(
        source4$,
        (x, y) => x + y
    ),
).subscribe(observer);

// 6
// 7
// 8
// 9
// complete!
