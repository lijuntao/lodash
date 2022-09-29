import castPath from './castPath.js'
import toKey from './toKey.js'

/**
 * The base implementation of `get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
// 获取对象指定路径上的值 支持a.b.c这样的深层取值
function baseGet(object, path) {
  // 将路径转换为数组
  path = castPath(path, object)

  let index = 0
  const length = path.length

  // 如果对象存在，并且层级不超过路径的层级
  while (object != null && index < length) {
    // 将当前层级的对象赋值给object
    object = object[toKey(path[index++])]
  }
  // 如果取到底，则返回相应的值，否则返回undefined
  return (index && index == length) ? object : undefined
}

export default baseGet
