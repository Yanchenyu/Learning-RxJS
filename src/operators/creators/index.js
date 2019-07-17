/**
 * @description 动态引入创建操作符
 */

function creators(name) {
    return import(`./${name}`)
}

// 创建类操作符
// 放开注释查看操作符

// creators('of')
// creators('from')
// creators('fromPromise')
// creators('timer')
creators('interval')
// creators('empty')
// creators('throwError')
// creators('never')
// creators('fromEvent')
// creators('range')
// creators('repeat')
// creators('generate')
