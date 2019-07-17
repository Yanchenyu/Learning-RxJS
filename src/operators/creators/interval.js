import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import observer from '../../observers';

// 第一个参数可选，表示时间间隔，默认为0，就是每1毫秒返回一个值，递增

const source$ = interval(1000).pipe(take(10));
source$.subscribe(observer);
// 0
// 1
// 2
// ...(永远不会结束)

// 每隔1秒打印一个数字，注意，起始数字是0，并且0是从1秒后开始打印，不是一执行就打印
// 等同于timer(1000, 1000)
