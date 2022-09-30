/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
// 复制一个数组 浅复制
function copyArray(source, array) {
  let index = -1
  const length = source.length

  // 如果有传入数组，则使用传入的数组作为新数组
  // 如果没有，则新创建一个数据
  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

export default copyArray
