import isSymbol from '../isSymbol.js'

/** Used to match property names within property paths. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
// 判断valye是否是object合法的属性名
function isKey(value, object) {
  // 如果是数组则直接返回false
  if (Array.isArray(value)) {
    return false
  }
  // 判断常规的属性名的类型
  // 除了symbol 外，作为属性值时，都会隐式转换成 string 类型，也可以作为合法的属性名
  // null 会转换为 String(null) -> 'null'
  // undefined会转换为 String(undefined) -> 'undefined'
  const type = typeof value
  if (type === 'number' || type === 'boolean' || value == null || isSymbol(value)) {
    return true
  }
  // 字符串类型
  // reIsPlainProp 匹配a-z、A-Z、0-9，以及下划线的单词字符
  // reIsDeepProp 在lodash中，像 a.b.c 和 a[0].b.c 这种可能会被当作属性路径对待 isKey 检测时，会将这些字符串排除
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object)) // 有传object，并且value是 object 的属性名，也会返回 true
}

export default isKey
