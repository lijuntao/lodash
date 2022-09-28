import freeGlobal from './freeGlobal.js'

/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
// 判断node环境
const moduleExports = freeModule && freeModule.exports === freeExports

/** Detect free variable `process` from Node.js. */
const freeProcess = moduleExports && freeGlobal.process

/** Used to access faster Node.js helpers. */
// nodeTypes 是 node 的 util 中 types 的方法集合，主要用来检测数据类型
const nodeTypes = ((() => {
  try {
    /* Detect public `util.types` helpers for Node.js v10+. */
    /* Node.js deprecation code: DEP0103. */
    // 直接用 require 方法，将 util 模块加载进来
    const typesHelper = freeModule && freeModule.require && freeModule.require('util').types
    return typesHelper
      ? typesHelper
      /* Legacy process.binding('util') for Node.js earlier than v10. */
      // 在 Node.js v10+ 版本之前，util 模块上是没有暴露出 types 的方法集的，
      // 在 v10+ 之前，可以使用 process.binding 来加载 util 上 types 方法
      : freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (e) { }
})())

export default nodeTypes
