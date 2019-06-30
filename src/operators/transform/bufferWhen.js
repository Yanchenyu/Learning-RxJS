import { fromEvent, timer } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';
import observer from '../../observers';

// 传入一个closingSelector，是一个function，不接受参数，它会返回一个Observable
// 可以理解为返回一个closingNotifier，表示告诉缓冲区何时输出缓冲的内容

const source$ = fromEvent(document, 'click');
source$.pipe(
    bufferWhen(() => {
        return timer(3000)
    })
).subscribe(observer);

// 其实也可以用bufferTime实现，详见bufferTime

// closingNotifier不一定是时间，也可以是次数，来实现类似于bufferCount效果
// source$.pipe(
//     bufferWhen(() => {
//         return
//     })
// ).subscribe(observer);
