import { interval, fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';
import observer from '../../observers';

// 第一个参数为缓冲区的个数限制，达到这个数就输出缓冲区的值
// 第二个参数可选，表示从当前缓冲区间内第几个值开始，新开一个缓冲区，注意，此时缓冲区可能会同时开两个

const source1$ = fromEvent(document, 'click');

source1$.pipe(
    bufferCount(3, 1)
).subscribe(observer);

// 每三次点击输出一个缓冲区，每次缓冲区到第二个值的时候，开启一个新的缓冲区，并将第二个值，包括它自身以及往后的值缓存至新的缓冲区
// 第一轮点击三次，会出一个数组，里面是最开始三次点击事件
// 但是后面开始每点击一次，就会输出一个数组，前两个事件是上一个数组的后两位

const source2$ = interval(1000);

source2$.pipe(
    bufferCount(3, 5)
).subscribe(observer);

// [0, 1, 2]
// [5, 6, 7]
// [10, 11, 12]
