/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/** Used to detect unsigned integer values. */
// reIsUint 用来判断值是否带符号。即是否是 +19 或 -19 这样的形式
const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  const type = typeof value
  // 如果length没有设置，则默认最大安全整数
  length = length == null ? MAX_SAFE_INTEGER : length

  // 索引的值需要满足

  // type === 'number' 类型是number
  // 或者
  // (type !== 'symbol' && reIsUint.test(value))
  // value 可以是除了 number 外的其他类型，即可能是 string、object、symbol 等等，
  // 用正则的test方法，会将value隐式转换为 string，再判断是否符合 resIsUint 的正则

  // (value > -1 && value % 1 == 0 && value < length)
  // value需要大于-1 value不能是浮点数 value需要小于数组长度
  return !!length &&
    (type === 'number' ||
      (type !== 'symbol' && reIsUint.test(value))) &&
    (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex
