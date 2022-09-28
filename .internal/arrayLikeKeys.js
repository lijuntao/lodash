import isArguments from '../isArguments.js'
import isBuffer from '../isBuffer.js'
import isIndex from './isIndex.js'
import isTypedArray from '../isTypedArray.js'

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  const isArr = Array.isArray(value)
  const isArg = !isArr && isArguments(value)
  const isBuff = !isArr && !isArg && isBuffer(value)
  const isType = !isArr && !isArg && !isBuff && isTypedArray(value)
  // skipIndexes来判断是否为 array、arguments、buffer、typedArray 等类数组
  const skipIndexes = isArr || isArg || isBuff || isType
  const length = value.length
  const result = new Array(skipIndexes ? length : 0)
  // 如果是类数组，则index从-1开始，下面的while循环会收集索引
  // 为什么要用while呢
  // 因为像数组会有稀疏数组这种情况，在 for...in 中，索引不会全部遍历出来
  let index = skipIndexes ? -1 : length
  while (++index < length) {
    result[index] = `${index}`
  }
  // 如果还有其他属性，也需要遍历出来，
  for (const key in value) {
    // 默认只收集 value 本身的属性，即属性要通过 Object.prototype.hasOwnProperty 的检测，
    // 但是可以通过传入标志位 inherited 来收集原型链上的属性
    if ((inherited || hasOwnProperty.call(value, key)) &&
      // 此时需要排除掉索引
      !(skipIndexes && (
        // Safari 9 has enumerable `arguments.length` in strict mode.
        // 在 Safari 9 中，在 strict mode 下，length 是可以枚举的，因此也要排除
        (key === 'length' ||
          // Skip index properties.
          isIndex(key, length))
      ))) {
      result.push(key)
    }
  }
  return result
}

export default arrayLikeKeys
