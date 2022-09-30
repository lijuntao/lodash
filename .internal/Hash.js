/** Used to stand-in for `undefined` hash values. */
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @memberOf Hash
   */
  clear() {
    // 数据都保存在__data__这个变量中
    this.__data__ = Object.create(null)
    this.size = 0
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @memberOf Hash
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  // 删除指定的key
  delete(key) {
    // delete 操作符用于删除对象的某个属性；
    // 所有情况都是true，除非属性是一个自身的不可配置的属性，在这种情况下，非严格模式返回 false
    const result = this.has(key) && delete this.__data__[key]
    // 如果删除成功，则size需要同步减小
    this.size -= result ? 1 : 0
    return result
  }

  /**
   * Gets the hash value for `key`.
   *
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    const data = this.__data__
    const result = data[key]
    // 如果触发了内部特殊值，则返回undefined
    return result === HASH_UNDEFINED ? undefined : result
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  // 判断当前是否存在当前的key，即key所对应的值不为undefined
  has(key) {
    const data = this.__data__
    // 如果值本身即为undefined的话，这里会判断失败，
    // 所以lodash将undefined作为一个特殊值处理HASH_UNDEFINED
    return data[key] !== undefined
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  set(key, value) {
    const data = this.__data__
    // 如果之前key不存在，则size增加1，否则不变化
    this.size += this.has(key) ? 0 : 1
    // 将value为undefined做特殊处理，
    data[key] = value === undefined ? HASH_UNDEFINED : value
    return this
  }
}

export default Hash
