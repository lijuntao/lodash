import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  const objValue = object[key]

  // 如果相应的key在对象上不存在并且要设置的值和原来值不相等
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    // (1 / value) === (1 / objValue) 处理0与-0问题
    if (value !== 0 || (1 / value) === (1 / objValue)) {
      baseAssignValue(object, key, value)
    }
  } else if (value === undefined && !(key in object)) {
    baseAssignValue(object, key, value)
  }
}

export default assignValue
