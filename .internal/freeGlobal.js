/** Detect free variable `global` from Node.js. */
// freeGlobal 是用来在 node 环境中捕获 global 变量
// 这个 global 变量有点相当于浏览器环境中的 window 对象
// 1、global是一个对象
// 2、global 不能是null
// 3、global.Object 是否和全局的 object 构造函数相同，如果相同，则这个很大概率就是全局的 global 对象了
// 这个检测不够严谨，如 重新自定义一个全局global变量
/**
 *
var global = {
  Object: Object
}
 */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

export default freeGlobal
