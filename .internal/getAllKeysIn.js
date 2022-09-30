import getSymbolsIn from './getSymbolsIn.js'

/**
 * Creates an array of own and inherited enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
// 类似于getAllKeys，但是getAllKeysIn会获取继承属性
function getAllKeysIn(object) {
  const result = []
  for (const key in object) {
    result.push(key)
  }
  if (!Array.isArray(object)) {
    result.push(...getSymbolsIn(object))
  }
  return result
}

export default getAllKeysIn
