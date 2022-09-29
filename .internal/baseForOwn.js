import baseFor from './baseFor.js'
import keys from '../keys.js'

/**
 * The base implementation of `forOwn`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
// 如果传入的对象存在，则调用baseFor进行遍历
function baseForOwn(object, iteratee) {
  // baseFor接收keys函数获取对象上所有key
  return object && baseFor(object, iteratee, keys)
}

export default baseForOwn
