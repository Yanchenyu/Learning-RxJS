import { of } from 'rxjs';
import observer from '../../observers'

const source1$ = of(1,2,3);
// 1
// 2
// 3

const source2$ = of([1,2,3]);
// [1,2,3]

source1$.subscribe(observer);
source2$.subscribe(observer);
