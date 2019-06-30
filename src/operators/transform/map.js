import { of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import observer from '../../observers';

// map是最简单的操作符之一，也是功能最大用得最多的操作符之一

const source1$ = of(1,2,3);
source1$.pipe(
    map(i => i * i)
).subscribe(observer);

// 1
// 4
// 9
// complete!

const source2$ = fromEvent(document, 'click');
source2$.pipe(
    map(e => e.clientX)
).subscribe(observer);

// 每次点击时触发
// 142
// 324
// ...
