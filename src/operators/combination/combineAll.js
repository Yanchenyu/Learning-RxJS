import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import observer from '../../observers'

interval(1000).pipe(
    map(x => interval(1000).pipe(
        map(y => `${x} ${y}`)
    ))
).subscribe(observer)
