import { interval, of } from 'rxjs';
import { map, concatAll, take } from 'rxjs/operators';
import observer from '../../observers'

interval(1000).pipe(
    take(2),
    map(x => interval(2000).pipe(
        take(2),
        map(y => `x: ${x}, y: ${y}`)
    )),
    concatAll()
).subscribe(observer)

/**
 * timeline: 0    1    2    3    4    5    6    7    8    9
 * 
 * interval:      0    1    2    3    4    5    6    7    8
 * 
 * take: x        0    1
 *                |    |
 * map:  y        |---------0         1
 *                     |              |
 *       y             |--------------|---------0          1
 * 
 * concatAll               0,0       0,1
 *                                              1,0       1,1
 */ 

// concatAll其实和concat一致，必须等前一个source$结束了才进入下一个，
// 这里可以这么理解，实际上第一层interval的每一个值，对应的第二层interval就是一个source$，只有第一个值对应的interval全部输出完成，才会进入第二个值对应的interval那一层
// 所以（x: 1, y: 0）是在(x: 0, y: 1)之后2s才输出