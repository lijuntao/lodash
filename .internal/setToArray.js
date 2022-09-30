/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

// 将set转换为array
function setToArray(set) {
  let index = -1
  const result = new Array(set.size)

  // 直接遍历set即可
  set.forEach((value) => {
    result[++index] = value
  })
  return result
}

export default setToArray
