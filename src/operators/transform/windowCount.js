import { fromEvent, interval } from 'rxjs';
import { windowCount, mergeAll, map, skip } from 'rxjs/operators';
import observer from '../../observers';

// 参数和bufferCount类似，区别是缓冲区和窗口，可以参考buffer和window，第一个参数是窗口内产生数值的最大个数
// 第二个参数可选，表示从当前窗口内第几个值开始，新开一个窗口，注意，此时窗口可能会同时开两个

const source1$ = fromEvent(document, 'click');

source1$.pipe(
    windowCount(3),
    map(win => win.pipe(skip(1))),
    mergeAll()
).subscribe(observer);

// skip是跳过第一个，所以每3个点击事件是一个窗口，每个窗口内第一次点击是跳过的不记录，所以第二三次点击会打印。以此类推。
