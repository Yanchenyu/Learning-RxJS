import { interval, fromEvent } from 'rxjs';
import { window, mergeAll, map, take } from 'rxjs/operators';
import observer from '../../observers';

const source1$ = interval(3000);
const source2$ = fromEvent(document, 'click');

source2$.pipe(
    window(source1$),
    map(win => win.pipe(
        take(2)
    )),
    mergeAll()
).subscribe(observer);

// 每一个窗口间隔时间为3秒，每一个窗口内最多输出2次点击事件
// 如果在一个窗口内，点击2次会依次打印点击事件，再点击不会有输出。除非进入下一个窗口内，继续打印。。。

/**
 * 这里总结一下buffer和window的区别：
 * 
 * 不同点：
 * 1，内容不同
 * buffer里是每个缓冲区。
 * window是每个窗口
 * 2，输出内容不同
 * buffer的缓冲区通常是一次性输出，缓冲区内的值是重叠并列关系，并且输出一个数组。
 * window的窗口不重叠，返回的是一个高阶Observable（它的值也是Observable，然后也有pipe方法），所以必须加一层去取出最里面的值，
 * 并且需要mergeAll将层级关系打平
 * 3，输出时机不同
 * buffer在一个缓冲区结束前不会输出，会一直等待，等待当前缓冲区结束再一起输出。
 * window不会等待，先入先出，依次输出，但是window也会同时输出，当同时存在多个窗口的时候，会同时输出，但是同一个窗口内一定不会同时输出
 * 
 * 相同点：
 * 1，参数相同
 * buffer以及相关操作符（bufferTime、bufferWhen、bufferCount、bufferToggle），
 * 和window以及相关操作符（windowTime、windowWhen、windowCount、windowToggle），传参基本一致。
 */

