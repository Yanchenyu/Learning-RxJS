/**
 * @description 动态引入组合类操作符
 */

function creators(name) {
    return import(`./${name}`)
}

// creators('concat');
// creators('merge');
// creators('race');
// creators('forkJoin');
// creators('zip');
// creators('combineLatest');
// creators('withLatestFrom');
creators('combineAll')
