import { of } from 'rxjs';
import { repeat } from 'rxjs/operators';
import observer from '../../observers';

// 这是一个operators操作符，将创建的流重复执行n次
// 不太清楚为什么官方把它放在创建操作符一类中

const source$ = of(1,2,3).pipe(repeat(3));
source$.subscribe(observer);

// 1
// 2
// 3
// 1
// 2
// 3
// 1
// 2
// 3
// complete!
