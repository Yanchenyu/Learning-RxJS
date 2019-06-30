import { interval, fromEvent, timer } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';
import observer from '../../observers';

// 第一个参数为openings，表示开启新缓冲区的通知
// 第二个参数为closingSelector，返回一个closingNotifier，表示告诉缓冲区何时输出缓冲的内容

// 这个bufferToggle的两个参数记住两点：
// 1, openings和closingSelector没有关系，它是单独执行的，一旦满足条件就开一个缓冲区
// 2, closingSelector一定是和openings相关的，它是从openings开始时计算
// 3, 每一个缓冲区都有一个openings和一个closingSelector，详解如下


const source1$ = fromEvent(document, 'click');

const source2$ = interval(2000);

const openings = interval(3000);

source2$.pipe(
    bufferToggle(
        openings,
        () => {
            return timer(5000)
        }
    )
).subscribe(observer);

// time: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 s

// s2$:    0   1   2   3    4    5      6     7     8     9

// open1:    | 1   2   3   

// close1:     1   2   3  |

// open2:          |2  3    4

// close2:         2   3    4|

// open3:                 | 4    5      6

// close3:                  4    5      6|


// [1, 2, 3]
// [2, 3, 4]
// [4, 5, 6]
// ...

// 每3秒的时候开启一个新的缓冲区，每个缓冲区开启后5秒关闭缓冲区并输出该缓冲区
// 输出的缓冲区就是在此期间的源Observable输出的值，如果是source1$就是在此期间的点击事件
