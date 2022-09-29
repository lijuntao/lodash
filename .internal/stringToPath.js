import memoizeCapped from './memoizeCapped.js'

const charCodeOfDot = '.'.charCodeAt(0)
const reEscapeChar = /\\(\\)?/g
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' + '|' +
  // Or match property names within brackets.
  '\\[(?:' +
  // Match a non-string expression.
  '([^"\'][^[]*)' + '|' +
  // Or match strings (supports escaping characters).
  '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]' + '|' +
  // Or match "" as the space between consecutive dots or empty brackets.
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
  , 'g')

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
// 将深层嵌套属性字符串转换成路径数组 为什么使用memoizeCapped，姑且认为方法中使用了正则表达式，对性能有所影响
// 将类似于 a.b.c 这样的字符串，转换成 ['a', 'b', 'c'] 这样的数组
// 将类似于 a[0].b 这样的形式，转换成路径数组是 ['a', '0', 'b']
const stringToPath = memoizeCapped((string) => {
  const result = []
  // 如果第一位是. 这认为最外层的属性为空字符串
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }

  // 正则替换
  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    }
    else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })
  return result
})

export default stringToPath
