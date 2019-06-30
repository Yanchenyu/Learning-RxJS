import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import observer from '../../observers';

// 第一个参数为target，可以为以下中的一种：
// DOMElement，Nodejs EventEmitter，DOM NodeList，事件目标等
// 第二个参数为事件名，必须为所有官方标准原生事件，字符串
// 关于事件参考这个链接：https://developer.mozilla.org/zh-CN/docs/Web/Events

const source1$ = fromEvent(document, 'click');
source1$.subscribe(observer);
// (每次点击document时打印)
// MouseEvent {.......}

document.getElementsByTagName('body')[0].style.cssText += 'height: 10000px';
const source2$ = fromEvent(window, 'scroll');
source2$.subscribe(observer);
// (当出现滚动条时，每次滚动时打印)
// Event { type: "scroll", .......}

const source3$ = fromEvent(window, 'load');
source3$.subscribe(observer);
// (页面加载完成时打印)
// Event { type: "load", ...... }
