import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

// (value !== undefined && !eq(object[key], value) 要设置的值不是undefined，并且原来对象相应key的值不等于value
// (value === undefined && !(key in object)) 如果value是undefined，并且key在源对象或者原型上不存在
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
    (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value)
  }
}

export default assignMergeValue
