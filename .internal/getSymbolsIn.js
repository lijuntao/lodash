import getSymbols from './getSymbols.js'

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
// 返回对象上所有的symbol属性，包括继承来的

function getSymbolsIn(object) {
  const result = []
  while (object) {
    result.push(...getSymbols(object))
    // 取出下一层级对象
    object = Object.getPrototypeOf(Object(object))
  }
  return result
}

export default getSymbolsIn
