import { interval, of } from 'rxjs';
import { map, combineAll, take } from 'rxjs/operators';
import observer from '../../observers'

interval(1000).pipe(
    take(2),
    map(x => interval(2000).pipe(
        take(2),
        map(y => `x: ${x}, y: ${y}`)
    )),
    combineAll()
).subscribe(observer)

/**
 * timeline: 0    1    2    3    4    5    6
 * 
 * interval:      0    1    2    3    4    5
 * 
 * take:          0    1
 *                |    |
 * map:           |---------0         1
 *                     |
 *                     |---------0          1
 * 
 * combineAll                   0,0   0,1   0,1
 *                              1,0   1,0   1,1
 */   
