import { timer } from 'rxjs';
import { combineLatest } from 'rxjs/operators';
import observer from '../../observers';

const source1$ = timer(500, 1000);
const source2$ = timer(1000, 1000);

const result$ = source1$.pipe(
    combineLatest(source2$)
);

// result$.subscribe(observer);
