import MapCache from './MapCache.js'

/** Used to stand-in for `undefined` hash values. */
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class SetCache {

  /**
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  constructor(values) {
    let index = -1
    const length = values == null ? 0 : values.length

    // SetCache 其实调用的是 MapCache 类
    this.__data__ = new MapCache
    while (++index < length) {
      this.add(values[index])
    }
  }

  /**
   * Adds `value` to the array cache.
   *
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  add(value) {
    // 将所有的key对应的值都是标准undefined 值 HASH_UNDEFINED
    // 防止在判断是够存在值的时候出错，hash的has判断值是否存在，是与undefined比较
    this.__data__.set(value, HASH_UNDEFINED)
    return this
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   */
  has(value) {
    return this.__data__.has(value)
  }
}

SetCache.prototype.push = SetCache.prototype.add

export default SetCache
