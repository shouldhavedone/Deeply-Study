/**
 * 手动实现call()
 * function.call(thisArg, arg1, arg2, ...)
 * this, 一个或多个参数
 */

Function.prototype.myCall = function(thisArg, ...args) {
  /*
  if (typeof thisArg !== 'function') {
    throw new TypeError('error')
  }

  var type = Object.prototype.toString.call(thisArg)
  console.log(type);
  switch (type) {
    case '[object Function]':
      break;
    case '[object String]':
      thisArg = new String(thisArg)
      break;
    case '[object Number]':
      thisArg = new Number(thisArg);
      break;
    case '[object Boolean]':
      thisArg = new Boolean(thisArg);
      break;
    case '[object Symbol]':
    case '[object Undefined]':
      thisArg = globalThis;
      break;
    default:
      thisArg = globalThis;
      break;
  }
  */
  const fn = Symbol('fn') // 声明一个独有的Symbol属性，防止fn覆盖已有的属性
  thisArg = thisArg || window // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this // this指向调用call的对象，即我们要改变this指向的函数
  const result = thisArg[fn](...args) // 执行当前函数
  delete thisArg[fn] // 删除声明的fn属性
  return result // 返回函数执行结果
}

// const foo = 12

var foo = {
  value: 1
}
function bar( name, age ) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
bar.myCall(foo, "Tom", 18)