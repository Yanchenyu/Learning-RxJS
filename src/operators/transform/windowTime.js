import { interval, fromEvent } from 'rxjs';
import { windowTime, window, mergeAll, map, take } from 'rxjs/operators';
import observer from '../../observers';

// 类似于bufferTime
// 第一个参数，窗口时间，因为不是同时输出，所以只是作为窗口间隔时间
// 第二个参数可选，开启新的窗口时间
// 第三个参数可选，窗口内的最大数量count，达到最大数量就不再输出

const source1$ = fromEvent(document, 'click');
source1$.pipe(
    windowTime(3000),
    map(win => win.pipe(take(2))),
    mergeAll()
).subscribe(observer);

// 每个窗口间隔3秒，每个窗口内只能点击2次，并且依次输出
