import { interval, fromEvent } from 'rxjs';
import { buffer } from 'rxjs/operators';
import observer from '../../observers';

// 传入一个closingNotifier, 类型为Observable
// 将源Observable发出的值缓冲起来，放至缓冲区
// 直到传入的closingNotifier发出值的时候，将缓冲区内的所有值一次性输出，输出的是一个数组
// 同时开启新的缓冲区，依次类推

const source1$ = interval(1000);
const source2$ = fromEvent(document, 'click');

source1$.pipe(
    buffer(source2$)
).subscribe(observer);
// 每一秒都向缓冲区存一个值，直到下一次点击事件触发，输出缓冲区的所有值

source2$.pipe(
    buffer(source1$)
).subscribe(observer);
// 每次点击都向缓冲区存一个点击事件，直到下一秒的时候，输出缓冲区的所有的点击事件