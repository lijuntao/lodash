/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

// 这个方法主要处理的是 __proto__ 属性的赋值
// __proto__ 不是对象的一个标准属性，本来它应该和对象其他自定义属性一样，不应该有任何特别的，
// 但是由于历史原因，基本所有的浏览器都实现了这个属性，用来保存对象的原型
// __proto__不推荐使用
function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    })
  } else {
    object[key] = value
  }
}

export default baseAssignValue
