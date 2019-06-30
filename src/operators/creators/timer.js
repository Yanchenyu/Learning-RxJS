import { timer } from 'rxjs';
import observer from '../../observers';

// 第一个参数表示在发出第一个值0之前的延迟时间，如果只传一个参数，就等同于setTimeout功能
// 第二个参数表示每隔多少时间，继续发出下一个数字，有点类似于setInterval

const source1$ = timer(1000);
source1$.subscribe(observer);
// (1秒之后打印)
// 0
// complete!

const source2$ = timer(4000, 2000);
source2$.subscribe(observer);
// (第一个0在4秒后打印，之后每隔2秒，打印加一)
// 0
// 1
// 2
// ...(永远不会结束)