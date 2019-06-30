import { interval, fromEvent } from 'rxjs';
import { window, mergeAll, map, take } from 'rxjs/operators';
import observer from '../../observers';

const source1$ = interval(3000);
const source2$ = fromEvent(document, 'click');

source2$.pipe(
    window(source1$),
    mergeAll()
).subscribe(observer);

// window我没搞懂，说是和buffer差不多，我感觉差很多啊-。-
