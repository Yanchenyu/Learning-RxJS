/**
 * @description 动态引入转换类操作符
 */

function creators(name) {
    return import(`./${name}`)
}

// creators('map')
// creators('mapTo')
// creators('scan')
// creators('pluck')
// creators('buffer')
// creators('bufferCount')
// creators('bufferTime')
// creators('bufferWhen')
// creators('bufferToggle')
// creators('window')
// creators('windowCount')
// creators('windowTime')
// creators('windowWhen')
// creators('windowToggle')
