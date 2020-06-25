/**
 * bind() 创建一个新函数，在bind() 被调用时，这个新函数的this被指定为bind()的第一个函数，而其余参数将作为新函数的参数，供调用时使用
 * function.bind(thisArg, arg1, arg2, ...)
 */

Function.prototype.myBind = function (thisArg, ...args) {
  var self = this
  console.log(this instanceof self);
  // new 优先级
  var fbound = function () {
    self.apply(
      this instanceof self ?
      this :
      thisArg,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }
  // 继承原型上的属性和方法
  fbound.prototype = Object.create(self.prototype)
  return fbound
}

const obj = {
  value: 'test'
}

function foo(name, age = 20) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}
foo.myBind(obj, 'Tom')()
