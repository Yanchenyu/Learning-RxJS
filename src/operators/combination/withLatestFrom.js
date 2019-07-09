import { interval, of } from 'rxjs';
import { withLatestFrom, take } from 'rxjs/operators';
import observer from '../../observers';

const source3$ = of(1, 2, 3, 4);
const source4$ = of(2, 3, 4, 5);

source3$.pipe(
    withLatestFrom(source4$),
).subscribe(observer);


// [1, 5]
// [2, 5]
// [3, 5]
// [4, 5]
// complete!

// 和combineLatest恰恰相反，这里source2$会直接结束，然后按照source1$的节奏来输出

// 其实我们发现无论是withLatestFrom还是combineLatest，都不是我们理想化的实现效果，我们期望的是达到一个完全同步的效果
// 就比如上面这个例子，我们期望的可能是
// [4, 5]
// complete!

// 这就是完全同步同时的效果，但是没办法，做不到，它必须有一个先后顺序，所以以哪个为主很重要，这就是combineLatest和withLatestFrom的区别

const source1$ = interval(1000);
const source2$ = interval(2000);

source1$.pipe(
    withLatestFrom(source2$),
    take(4)
).subscribe(observer);

// (2s后打印)
// [1, 0]
// (1s 间隔)
// [2, 0]
// (1s 间隔)
// [3, 1]
// (1s 间隔)
// [4, 1]
// complete!

// 解决了combineLatest的问题，达到我们所期望的效果
