import { range } from 'rxjs';
import observer from '../../observers';

// 第一个参数是起始值，第二个是长度，间隔为1

const source$ = range(5, 2);
source$.subscribe(observer);

// 5
// 6
// complete!
