import { generate } from 'rxjs';
import observer from '../../observers';

// 类似于创建一个for循环，前三个参数依次对应for循环括号里的三个参数，第四个是对数值的处理
// for (let i = 2; i < 5; i++) { i * i }

const source$ = generate(
    2,
    i => i < 5,
    i => i + 1,
    i => i * i
);
source$.subscribe(observer);

// 4
// 9
// 16
// complete!
