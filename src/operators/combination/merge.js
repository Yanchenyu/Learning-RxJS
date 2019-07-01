import { fromEvent, interval } from 'rxjs';
import { merge } from 'rxjs/operators';
import observer from '../../observers';

// 先输出的先执行，不等待

// 支持传入一个数字参数，表示能同时支持的最大订阅Observable数量

const source1$ = fromEvent(document, 'click');
const source2$ = interval(1000);

source1$.pipe(
    merge(source2$, source2$, source2$, 2)
).subscribe(observer);
