import assocIndexOf from './assocIndexOf.js'

class ListCache {

  /**
   * Creates an list cache object.
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
   * Removes all key-value entries from the list cache.
   *
   * @memberOf ListCache
   */
  clear() {
    this.__data__ = []
    this.size = 0
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    // 如果没有找到，则直接返回false
    if (index < 0) {
      return false
    }
    const lastIndex = data.length - 1
    // 如果是最后一个数据，则使用pop删除数据
    // 因为 pop 的性能比 splice 好
    if (index == lastIndex) {
      data.pop()
    } else {
      // 如果不是，则使用splice删除
      data.splice(index, 1)
    }
    --this.size
    return true
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)
    return index < 0 ? undefined : data[index][1]
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    return assocIndexOf(this.__data__, key) > -1
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  set(key, value) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    // 如果没有找到则push进新的数据
    if (index < 0) {
      ++this.size
      data.push([key, value])
    } else {
      // 如果找到了，则更新数据
      data[index][1] = value
    }
    return this
  }
}

export default ListCache
