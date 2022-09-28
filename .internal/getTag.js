// toString() 方法被每个 Object 对象继承。
// 如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型
const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  if (value == null) {
    // 从 JavaScript 1.8.5 开始，toString() 调用 null 返回[object Null]，undefined 返回 [object Undefined]
    // 所以这里的判断感觉不必要，但是为了兼容行，还是需要的
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

export default getTag
