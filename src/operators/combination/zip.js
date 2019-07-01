import { fromEvent, timer, interval, zip, of } from 'rxjs';
import observer from '../../observers';

// zip会将多个Observable产生的值按顺序依次对齐，然后输出拼在一块的数组，一个对一个，就像拉链一样

const source1$ = of(1, 2, 3);
const source2$ = timer(1500);
const source3$ = interval(1000);

zip(source1$, source2$, source3$).subscribe(observer);

// 1.5秒后输出
// [1, 0, 0]
// complete!

// 虽然1.5秒的时候，interval并没有完结，而且of也只吐出了1个值，但是timer完结了，没有下一个值产生了，因此不会再有更多匹配
// 直接完结。

const source4$ = fromEvent(document, 'click');
zip(source1$, source2$, source3$, source4$).subscribe(observer);

// 在我点击事件之前，zip永远不会输出，因为它一直是同批输出的，由于点击事件没有触发，其它Observable都处于堆积等待状态
// 点击一次后，输出数组，这时候timer因为只有一个值，所以不会有更多，直接完结

// (一次点击后输出)
// [1, 0, 0, MouseEvent]
