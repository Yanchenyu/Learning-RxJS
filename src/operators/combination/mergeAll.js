import { interval, of } from 'rxjs';
import { map, mergeAll, take } from 'rxjs/operators';
import observer from '../../observers'

interval(1000).pipe(
    take(2),
    map(x => interval(2000).pipe(
        take(2),
        map(y => `x: ${x}, y: ${y}`)
    )),
    mergeAll()
).subscribe(observer)

/**
 * timeline: 0    1    2    3    4    5    6
 * 
 * interval:      0    1    2    3    4    5
 * 
 * take: x        0    1
 *                |    |
 * map:  y        |---------0         1
 *                     |
 *       y             |---------0          1
 * 
 * mergeAll                 0,0       0,1
 *                              1,0        1,1
 */   


// mergeAll其实和merge一致，有值就输出