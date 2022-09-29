/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
// 直接调用split分割字符串
function asciiToArray(string) {
  return string.split('')
}

export default asciiToArray
