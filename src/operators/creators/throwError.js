import { throwError } from 'rxjs';
import observer from '../../observers';

// 这个仅仅用来发出error通知，可以强行执行observer error操作
// 第一个参数为error信息，类型不限
// 之前的版本是throw，包括官方文档上也是，但是throw是js内已定义的标识符，所以改了名叫throwError

const source$ = throwError('woops, something wrong');
source$.subscribe(observer);
// error