/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
// 将set转换为pairs数据
function setToPairs(set) {
  let index = -1
  const result = new Array(set.size)

  // 数组中的每一项都是值
  set.forEach((value) => {
    result[++index] = [value, value]
  })
  return result
}

export default setToPairs
