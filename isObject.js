/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
// 是否是一个对象
// 所有使用 new 调用的构造函数都将返回非基本类型（"object" 或 "function"）
// const str = new String("String");
// const num = new Number(100);

// typeof str; // "object"
// typeof num; // "object"

// const func = new Function();

// typeof func; // "function"

function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export default isObject
