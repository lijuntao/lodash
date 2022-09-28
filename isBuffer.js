import root from './.internal/root.js'
// 检测是否在 Node.js 环境中，lodash主要判断当前环境中是否支持 CommonJS 模块加载机制
// Node.js 原生支持 CommonJS 模块加载机制，会在在全局环境上会暴露 module 对象和 exports 对象


/** Detect free variable `exports`. */
// 判断exports是一个对象且不等于null并且不是一个html节点
// !exports.nodeType 判断不是 html 元素
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
// 和export类似,多一个判断即exports必须存在，因为exports和module肯定同时存在
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
// CommonJS 规定，exports 对象必须为 module.exports 的引用
const moduleExports = freeModule && freeModule.exports === freeExports

/** Built-in value references. */
// 如果是node环境则直接去Buffer对象
const Buffer = moduleExports ? root.Buffer : undefined

/* Built-in method references for those with the same name as other `lodash` methods. */
// 取出isBuffer方法
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

/**
 * Checks if `value` is a buffer.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */

// javascript 原本没有二进制数据类型 Buffer ，但是在处理 TCP 流或者文件流时，又必须要用到 Buffer ，
// 因此 Node.js 定义了一个 Buffer 的数据类型
// Node.js 定义了一个 Buffer 类，Buffer 类上有一个静态方法 isBuffer ，来检测某个值是否为 Buffer 类型
// 因此需要先判断是否是node环境，如果是node环境则直接调用idBuffer方法，如果不是则直接返回一个永远返回 false 值的方法
const isBuffer = nativeIsBuffer || (() => false)

export default isBuffer
