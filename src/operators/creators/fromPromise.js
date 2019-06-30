import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import observer from '../../observers';
import { getData } from '../../util';

// from也能支持promise，感觉完全可以用from来替代，from功能更强大一些

const source$ = fromPromise(getData('http://127.0.0.1:8033/answer'));
source$.subscribe(observer);
// 200
// complete !
