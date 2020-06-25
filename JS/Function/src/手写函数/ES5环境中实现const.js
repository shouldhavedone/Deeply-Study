/**
 * 实现const的关键在于 Object.defineProperty() 这个API
 * 用于在一个对象上增加或修改属性。
 * Object.defineProperty(obj, prop, desc)
 * obj => 要定义属性的对象
 * prop => 要定义或修改的属性的名称
 * desc => 将被定义或修改的属性描述符
 */

 /**
  * 属性描述符
  * value => 该属性对应的值 => undefined
  * get => 提供getter => undefined
  * set => 提供setter => undefined
  * writable => 当且仅当值为true时，value才能被赋值运算符改变 => false
  * enumerable => 定义了对象属性是否可以在 for..in循环和Object.key()中被枚举
  * Configurable => 表示对象的属性是否可以被删除，以及除value和writable外特性是否可以被修改
  */

  var _const  = function _const(data, value) {
    // 
    globalThis.data = value // 将要定义的data挂载到window下，并赋值给value
    Object.defineProperty(
      globalThis, data, {
        enumerable: false,
        configurable: false,
        get: function() {
          return value
        },
        set: function(data) {
          if(data !== value) {
            throw new TypeError('Assignment to constant variable!')
          } else {
            return value
          }
        }
      }
    )
  }

  _const('a', 10)
  console.log(a);

  a = 20