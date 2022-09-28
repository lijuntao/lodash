/* global globalThis, self */
import freeGlobal from './freeGlobal.js'

/** Detect free variable `globalThis` */
/**
 *
 globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）。
 不像 window 或者 self 这些属性，它确保可以在有无窗口的各种环境下正常工作。
 所以，你可以安心的使用 globalThis，不必担心它的运行环境。
 为便于记忆，你只需要记住，全局作用域中的 this 就是 globalThis
 */
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis

/** Detect free variable `self`. */
// 返回一个指向当前 window 对象的引用。
/**
 *
window.self 几乎总是用于如下的比较，用来判断当前 window 是不是父 frameset 中的第一个 frame
if (window.parent.frames[0] != window.self) {
    // 当前对象不是 frames 列表中的第一个时
 }

 */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/**
 *
Function('return this')()
在松散模式下，可以在函数中返回 this 来获取全局对象，
但是在严格模式和模块环境下，this 会返回 undefined
可以使用 Function('return this')()
 */
/** Used as a reference to the global object. */
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

export default root
