/**
 * @description 动态引入实战案例
 */

function creators(name) {
    return import(`./${name}`)
}

// creators('clickTimes');
creators('boxDrag');