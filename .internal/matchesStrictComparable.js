/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
// matchesStrictComparable 接收属性 key 和值 srcValue ，返回一个函数，
// 这个函数接收 object 作为参数，并且判断 object 上对应的属性 key 上的值是否和 srcValue 严格相等
function matchesStrictComparable(key, srcValue) {
  return (object) => {
    if (object == null) {
      return false
    }
    // 1、如果传入的值是 undefined 时，刚好 object 上没有对应的属性 key ，这里 object[key] === srcValue 也是ture
    // 2、排除传入是undefined的情况
    // 2.1、传入的值不等于undefined
    // 2.2、对象存在object中，但是值为undefined
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)))
  }
}

export default matchesStrictComparable
