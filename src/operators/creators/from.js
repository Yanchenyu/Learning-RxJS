import { from } from 'rxjs';
import observer from '../../observers';
import { getData } from '../../util';

// You can provide an Observable, Promise, Array, or Iterable.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise resolve !')
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    reject('promise reject !')
});

const source1$ = from(promise1);
// 2秒之后打印如下
// promise resolve !
// complete !

const source2$ = from(promise2);
// error:  promise reject !

const source6$ = from(getData('http://127.0.0.1:8033/answer'));
source6$.subscribe(observer);
// 200
// complete !


const source3$ = from([1, 2, 3]);
// 1
// 2
// 3
// complete !

/**
 * 原生具备 Iterator 接口的数据结构如下:
    Array
    Map
    Set
    String
    TypedArray
    函数的 arguments 对象
    NodeList 对象
 */
const source4$ = from(new Set(['a', 'b', 'c']));
// a
// b
// c
// complete !

const source5$ = from('123');
// 1
// 2
// 3
// complete !

source1$.subscribe(observer);
source2$.subscribe(observer);
source3$.subscribe(observer);
source4$.subscribe(observer);
source5$.subscribe(observer);

