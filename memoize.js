/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 * const other = { 'c': 3, 'd': 4 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(other)
 * // => [3, 4]
 *
 * object.a = 2
 * values(object)
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // Replace `memoize.Cache`.
 * memoize.Cache = WeakMap
 */

// 缓存传入函数的计算结果，对于重复执行计算量繁重的函数相当有用
function memoize(func, resolver) {
  // 判断传入参数是否合法
  // 如果提供了第二个参数resolver,这使用resolver的返回值作为key来缓存结果 默认情况下用第一个参数作为缓存的 key
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError('Expected a function')
  }

  const memoized = function (...args) {
    // 设置缓存的key 默认情况下用第一个参数作为缓存的 key
    const key = resolver ? resolver.apply(this, args) : args[0]
    const cache = memoized.cache

    // 如果缓存中有值，则直接返回
    if (cache.has(key)) {
      return cache.get(key)
    }
    // 第一次使用是，缓存中没有值，则调用函数计算结果
    const result = func.apply(this, args)
    // 将计算结果放入缓存
    memoized.cache = cache.set(key, result) || cache
    return result
  }
  // 使用 Map 来存储
  memoized.cache = new (memoize.Cache || Map)
  return memoized
}

// 设置缓存
memoize.Cache = Map

export default memoize
