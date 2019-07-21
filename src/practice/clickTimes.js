/**
 * @description 连续点击次数统计，支持动态传值
 */

/**
 * 1，先将点击事件转化为流
 * 2，250ms内如果再次点击，视为同次有效，超过视为下一次点击
 */

import { fromEvent } from 'rxjs';
import { filter, buffer, throttleTime, map, scan } from 'rxjs/operators';

const clickStream$ = fromEvent(document, 'click');

clickStream$.pipe(
    buffer(clickStream$.pipe(throttleTime(500))),
    filter(x => x.length === 3),
    scan(seed => seed + 1, 0)
).subscribe(val => document.getElementById('clickTimes').innerHTML = val)
