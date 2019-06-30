import { empty } from 'rxjs/internal/observable/empty';
import observer from '../../observers';

// 这个仅仅用来发出完成通知，可以强制完成

const source$ = empty();
source$.subscribe(observer);
// complete!