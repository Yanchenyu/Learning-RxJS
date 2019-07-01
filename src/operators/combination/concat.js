import { of, interval, timer, concat as concatObservable } from 'rxjs';
import { concat } from 'rxjs/operators';
import observer from '../../observers';

// concat既可以作为Observable，也可以作为operators，从引用路径就能看出

const source1$ = of(1,2,3);
const source2$ = of(4,5,6);

const result1$ = concatObservable(
    source1$,
    source2$
);

result1$.subscribe(observer);

const result2$ = source1$.pipe(
    concat(source2$)
);

result2$.subscribe(observer);

// 这两个是等同的，结果都是
// 1
// 2
// 3
// 4
// 5
// 6
// complete!


// concat是同步执行的，必须第一个Observable完成时才继续拼接第二个，全部完成才会complete，
// 如果其中一个是无终止的，那么永远不会complete
const source3$ = interval(1000);

const result3$ = source1$.pipe(
    concat(source3$)
);

result3$.subscribe(observer);