import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import observer from '../../observers'

interval(1000).pipe(
    take(2)
).subscribe(observer)


