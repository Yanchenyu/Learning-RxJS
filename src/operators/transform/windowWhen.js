import { fromEvent, timer } from 'rxjs';
import { windowWhen, map, take, mergeAll } from 'rxjs/operators';
import observer from '../../observers';

// 传入一个closingSelector，是一个function，不接受参数，它会返回一个Observable
// 可以理解为返回一个closingNotifier，表示告诉窗口何时结束并开启新窗口，其实就是每个窗口的间隔时间

const source$ = fromEvent(document, 'click');
source$.pipe(
    windowWhen(() => {
        return timer(3000)
    }),
    map(win => win.pipe(
        take(2)
    )),
    mergeAll()
).subscribe(observer);

