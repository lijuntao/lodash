import isObject from '../isObject.js'

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
// 判断一个值是否可以使用 === 比较
function isStrictComparable(value) {
  return value === value && !isObject(value)
}

export default isStrictComparable
