import { interval, fromEvent } from 'rxjs';
import { buffer } from 'rxjs/operators';
import observer from '../../observers';

// 传入一个closingNotifier, 类型为Observable
// 将源Observable发出的值缓冲起来，放至缓冲区
// 直到传入的closingNotifier发出值的时候，将缓冲区内的所有值一次性输出，输出的是一个数组
// 同时开启新的缓冲区，依次类推

const source1$ = interval(1000);
const source2$ = fromEvent(document, 'click');

source1$.pipe(
    buffer(source2$)
).subscribe(observer);
// 每一秒都向缓冲区存一个值，直到下一次点击事件触发，输出缓冲区的所有值

source2$.pipe(
    buffer(source1$)
).subscribe(observer);
// 每次点击都向缓冲区存一个点击事件，直到下一秒的时候，输出缓冲区的所有的点击事件


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
