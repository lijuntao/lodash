import eq from '../eq.js'

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
// 找出指定的 key 在数组中的索引值
// var caches = [['test1', 1],['test2',2],['test3',3]]
// assocIndexOf(caches,'test1')
function assocIndexOf(array, key) {
  let { length } = array
  while (length--) {
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}

export default assocIndexOf
