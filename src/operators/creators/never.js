import { never } from 'rxjs/internal/observable/never';
import observer from '../../observers';

// 不发出东西，不结束，也不error，没有任何反应

const source$ = never();
source$.subscribe(observer);
