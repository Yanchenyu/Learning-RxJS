/**
 * @description 动态引入创建操作符
 */

export function creators(name) {
    return import(`./${name}`)
}
