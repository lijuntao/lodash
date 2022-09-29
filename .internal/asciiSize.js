/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
// asscii 的每个字符的长度为 1，因此只需要将长度 length 返回即可
function asciiSize({ length }) {
  return length
}

export default asciiSize
