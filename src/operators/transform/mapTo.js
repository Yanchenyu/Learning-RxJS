import { of, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import observer from '../../observers';

// 类似于map，但是mapTo指定映射的值为多少，传入一个value

const source1$ = of(1,2,3);
source1$.pipe(
    mapTo('a')
).subscribe(observer);

// a
// a
// a
// complete!

const source2$ = fromEvent(document, 'click');
source2$.pipe(
    mapTo('b')
).subscribe(observer);

// 每次点击时触发
// b
// b
// ...
