/** Used for built-in method references. */
const objectProto = Object.prototype

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
// 是否为原型对象
function isPrototype(value) {
  // 判断这个对象是否有构造函数
  const Ctor = value && value.constructor
  // 如果有构造函数，则取出这个函数的prototype属性
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto

  // 函数的prototype属性等于这个对象
  return value === proto
}

export default isPrototype
