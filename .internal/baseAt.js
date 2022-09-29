import get from '../get.js'

/**
 * The base implementation of `at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */

// 获取对象指定路径上的值，注意是一组路径
function baseAt(object, paths) {
  let index = -1
  const length = paths.length
  const result = new Array(length)
  // 如果 object == null ，即 object 为 undefined 或者 null
  // 则路径上肯定不存在值，直接赋值为undefined
  const skip = object == null

  while (++index < length) {
    // 如果对象存在，则直接调用get获取相应的值
    result[index] = skip ? undefined : get(object, paths[index])
  }
  return result
}

export default baseAt
