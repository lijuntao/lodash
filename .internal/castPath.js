import isKey from './isKey.js'
import stringToPath from './stringToPath.js'

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
// 返回属性层级数组
function castPath(value, object) {
  // 如果是数组，则直接返回
  if (Array.isArray(value)) {
    return value
  }
  // 如果是常规的属性名，则直接转为数组
  // 如果是a.b.c或者a.b[0].c形式，调用stringToPath获取属性路径数组
  // a.b.c -> ['a','b','c']
  // a.b[0].c -> ['a','b','0','c']
  return isKey(value, object) ? [value] : stringToPath(value)
}

export default castPath
