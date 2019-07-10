import { interval, of } from 'rxjs';
import { map, combineAll, take } from 'rxjs/operators';
import observer from '../../observers'

interval(1000).pipe(
    take(2),
    map(x => of(100).pipe(
        map(y => `x: ${x}, y: ${y}`),
    )),
    combineAll()
).subscribe(observer)


