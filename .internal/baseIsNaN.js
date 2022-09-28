/**
 * The base implementation of `isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */

// 在 js 中，只有 NaN 和自身是不相等的

// Object.is(NaN, NaN) 返回的是 true 但是Object.is(+0, -0) 返回的是 false

// isNaN 的全局方法，可以用来判断一个值是否为 NaN,
// 但是isNaN有一个很怪异的行为，如果传入的参数不为 Number 类型，会尝试转换成 Number 类型之后再做是否为 NaN 的判断
// isNaN('notNaN')  返回true

//为了修复 isNaN 的缺陷，es6 在 Number 对象上扩展了 isNaN 方法，只有是 NaN 时才会返回 true

function baseIsNaN(value) {
  return value !== value
}

export default baseIsNaN
