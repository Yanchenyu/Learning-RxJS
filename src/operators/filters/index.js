/**
 * @description 动态引入过滤类操作符
 */

function creators(name) {
    return import(`./${name}`)
}

// creators('take')
