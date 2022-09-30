/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
// 设置一个函数的toString方法，该方法返回传入的字符串
function setToString(func, string) {
  return Object.defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': () => string,
    'writable': true
  })
}

export default setToString
