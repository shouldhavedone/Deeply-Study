/**
 * 手动实现apply()
 * function.apply(thisArg, [argsArray])
 * this, 参数数组(伪数组）
 */

//  Function.prototype.myApply = function(thisArg, args) {
//    const fn = Symbol('fn')
//    thisArg = thisArg || globalThis
//    thisArg[fn] = this
//    const result = thisArg[fn](...args)
//    delete thisArg[fn]
//    return result
//  }

Function.prototype.myApply = function(thisArg, args) {
  const fn = Symbol('fn')
  thisArg = thisArg || globalThis
  thisArg[fn] = this
  const result = thisArg[fn](...args)
  delete thisArg[fn]
  return result
}

var obj = {
  value: 'test'
}
const foo = function(name, age) { 
  console.log(name, age);
  console.log(this.value);  
}

foo.myApply(obj, ['Tom', 20])