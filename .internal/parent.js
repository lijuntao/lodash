import baseGet from './baseGet.js'
import slice from '../slice.js'

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  // 如果路径长度小于，则直接返回object
  // 否则调用baseGet取值，并将路径最后一项去除，则为传入路径的父级
  return path.length < 2 ? object : baseGet(object, slice(path, 0, -1))
}

export default parent
