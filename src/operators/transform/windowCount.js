import { fromEvent, interval } from 'rxjs';
import { windowCount, mergeAll, map, skip } from 'rxjs/operators';
import observer from '../../observers';

// 第一个参数为缓冲区的个数限制，达到这个数就输出缓冲区的值
// 第二个参数可选，表示从当前缓冲区间内第几个值开始，新开一个缓冲区，注意，此时缓冲区可能会同时开两个

const source1$ = fromEvent(document, 'click');

source1$.pipe(
    windowCount(3),
    map(win => win.pipe(skip(1))),
    mergeAll()
).subscribe(observer);

