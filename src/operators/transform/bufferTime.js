import { interval, fromEvent } from 'rxjs';
import { bufferTime, buffer } from 'rxjs/operators';
import observer from '../../observers';

// 第一个参数，缓冲时间，达到这个时间，输出缓冲区的数组
// 第二个参数可选，开启新的缓冲区时间
// 第三个参数可选，缓冲区的最大数量count，达到最大数量直接输出

const source1$ = fromEvent(document, 'click');
source1$.pipe(
    bufferTime(3000, null, 3)
).subscribe(observer);

// 每隔3秒，输出缓冲区内所有点击事件，最大3次点击，达到3次直接输出

// 用buffer也能实现bufferTime部分功能
// 比如:
const source2$ = interval(3000);
source1$.pipe(
    buffer(source2$)
).subscribe(observer);

// 等同于

source1$.pipe(
    bufferTime(3000)
).subscribe(observer);

