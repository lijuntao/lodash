/** Built-in value references. */
// propertyIsEnumerable() 方法返回一个布尔值，表示指定的属性是否可枚举
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable

/* Built-in method references for those with the same name as other `lodash` methods. */
// Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组
const nativeGetSymbols = Object.getOwnPropertySymbols

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
function getSymbols(object) {
  if (object == null) {
    return []
  }
  object = Object(object)
  // 获取对象上所有的symbol属性，并且只过滤可枚举的属性
  return nativeGetSymbols(object).filter((symbol) => propertyIsEnumerable.call(object, symbol))
}

export default getSymbols
