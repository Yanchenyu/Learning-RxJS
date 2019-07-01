import { fromEvent, timer, interval } from 'rxjs';
import { race } from 'rxjs/operators';
import observer from '../../observers';

// 传入多个Observable，比谁先执行，先执行的会仅订阅它一个，其它都不会再订阅

const source1$ = fromEvent(document, 'click');
const source2$ = timer(1500);
const source3$ = interval(1000);

source1$.pipe(
    race(source2$, source3$)
).subscribe(observer);

// 如果在1秒内执行了点击事件，则后续只能打印点击事件，另外两个不会执行；如果1秒内没有点击，则后续只能执行interval事件
