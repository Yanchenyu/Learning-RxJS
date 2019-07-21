const div = document.createElement('div');
div.id = 'box';
div.style.cssText = 'width: 50px; height: 50px; background-color: red; position: absolute';
document.body.appendChild(div);

import { fromEvent } from 'rxjs';
import { merge, takeUntil, map, mergeMap, delay } from 'rxjs/operators';

const box = document.getElementById('box');
const mouseDown$ = fromEvent(box, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const mouseMove$ = fromEvent(document, 'mousemove');

const drag$ = mouseDown$.pipe(
    delay(1000),
    mergeMap(startEvent => {
        return mouseMove$.pipe(
            takeUntil(mouseUp$),
            map(moveEvent => {
                return {
                    x: moveEvent.x - startEvent.x + box.offsetLeft,
                    y: moveEvent.y - startEvent.y + box.offsetTop
                }
            })
        )
    })
)

drag$.subscribe(event => {
    box.style.left = event.x + 'px';
    box.style.top = event.y + 'px';
})
