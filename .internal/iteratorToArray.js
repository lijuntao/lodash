/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
// 将一个迭代器转换为数组
function iteratorToArray(iterator) {
  let data
  const result = []
  // 一直调用 iterator.next 方法，直至 done 为 true 为止
  while (!(data = iterator.next()).done) {
    result.push(data.value)
  }
  return result
}

export default iteratorToArray
