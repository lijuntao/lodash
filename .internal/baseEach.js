import baseForOwn from './baseForOwn.js'
import isArrayLike from '../isArrayLike.js'

/**
 * The base implementation of `forEach`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
// 遍历集合
function baseEach(collection, iteratee) {
  if (collection == null) {
    return collection
  }
  // 如果不是类数组，则调用baseForOwn进行遍历
  if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee)
  }
  const length = collection.length
  const iterable = Object(collection)
  let index = -1

  while (++index < length) {
    // 如果 iteratee 返回的结果为 false，则会中止遍历
    if (iteratee(iterable[index], index, iterable) === false) {
      break
    }
  }
  return collection
}

export default baseEach
