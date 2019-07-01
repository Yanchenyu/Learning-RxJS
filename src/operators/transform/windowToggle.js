import { interval, fromEvent, timer } from 'rxjs';
import { windowToggle, mergeAll } from 'rxjs/operators';
import observer from '../../observers';

// 第一个参数为openings，表示开启新窗口的通知
// 第二个参数为closingSelector，返回一个closingNotifier，表示告诉窗口何时结束

const source$ = fromEvent(document, 'click');

const openings = interval(3000);

source$.pipe(
    windowToggle(
        openings,
        () => {
            return timer(5000)
        }
    ),
    mergeAll()
).subscribe(observer);
