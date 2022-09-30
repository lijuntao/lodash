import getSymbols from './getSymbols.js'
import keys from '../keys.js'

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
// 类似于keys，但是keys不会获取对象的symbol属性，所以需要调用getSymbols获取对象的symbol属性
function getAllKeys(object) {
  const result = keys(object)
  if (!Array.isArray(object)) {
    result.push(...getSymbols(object))
  }
  return result
}

export default getAllKeys
