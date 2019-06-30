import { of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import observer from '../../observers';

// 依次传入要获取的属性名，如果没有检索到，则返回undefined

const source1$ = of(
    { name: 'Lilei' },
    { name: 'Hanmeimei' }
);
source1$.pipe(
    pluck('name')
).subscribe(observer);
// Lilei
// Hanmeimei
// complete!

const source2$ = of(
    {
        obj: {
            age: 12
        }
    },
    {
        obj: {
            age: 13
        }
    },
    {
        obj: {
            name: 'Lucy'
        }
    }
);
source2$.pipe(
    pluck('obj', 'age')
).subscribe(observer);
// 12
// 13
// undefined
// complete!
