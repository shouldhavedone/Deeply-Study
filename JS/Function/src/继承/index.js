function Animal( name ) {
  // 属性
  this.name = name || 'Animal'
  // 实例方法
  this.sleep = function() {
    console.log( this.name + '正在睡觉!')
  }
}

// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃' + food)
}

/**
 * 1、原型链继承
 */
// function Cat() {
//   this.age = 20
// }
// // Cat.prototype.sex = '男'
// Cat.prototype = new Animal()
// Cat.prototype.name = '猫'

// let cat = new Cat()
// console.log(cat)
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat.eat('fish'))
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)
// console.log(cat.age)

/** 
 * 2、构造继承
*/
// function Person() {
//   this.age = 20
// }
// function Cat(name) {
//   Animal.call(this)
//   Person.call(this)
//   this.name = name || 'Tom'
// }
// let cat = new Cat() 
// console.log(cat)
// console.log(cat.name)
// console.log(cat.sleep())
// // console.log(cat.eat('fish'))
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)  

// console.log(cat.age)

/** 
 * 实例继承
*/
// function Cat(name) {
//   let instance = new Animal()
//   instance.name = name || 'Tom'
//   return instance
// }

// let cat = new Cat()
// console.log(cat)
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)
// console.log(cat.eat('fish'))

/** 
 * 组合继承
*/
// function Cat(name) {
//   Animal.call(this, name) // 构造函数模式
// }

// Cat.prototype = new Animal() // 原型链继承
// let cat = new Cat('Tom')
// console.log(cat)
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat.eat('fish'))
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)

/** 
 * 拷贝继承
*/
// function Cat(name) {
//   let animal = new Animal()
//   for( let i in animal ) {
//     Cat.prototype[i] = animal[i]
//   }
//   Cat.prototype.name = name || 'Tom'
// }
// let cat = new Cat()
// console.log(cat)
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat.eat('fish'))
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)

/** 
 * 原型式继承
*/
// function Cat(obj) {
//   function A(){}
//   A.prototype = obj
//   return new A
// }

// let animal = new Animal();
// let cat = new Cat(animal)
// console.log(cat)
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat.eat('fish'))
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)

/** 
 * 寄生式继承
*/
// function Content(obj) {
//   function A(){}
//   A.prototype = obj // 继承了传入的参数
//   return new A()  // 返回一个函数对象
// }

// let animal = new Animal()
// // 以上是原型式继承，给原型式继承再套个壳子传递参数
// function Cat(obj) {
//   let sub = Content(obj)
//   sub.name = "Cat"
//   return sub
// }

// let cat = Cat(animal)
// // 这个函数经过声明后就成了可增添属性的对象
// console.log(cat)
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat.eat('fish'))
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)

/** 
 * 寄生组合继承
*/
//寄生
function Content(obj) {
  function A(){}
  A.prototype = obj
  return new A()
}
// content就是A实例的另一种表示法
let content = Content(Animal.prototype)
// content实例(A实例)的原型继承了父类函数的原型

// 组合
function Cat(name){
  Animal.call(this) // 这个继承了父类构造函数的属性
  this.name = name
} // 解决了组合式两次调用构造函数属性的缺点

Cat.prototype = content // 继承了content实例
content.constructor = Cat // 修复实例

let cat = new Cat("Tom")
// Cat的实例继承了构造函数属性，父类实例，content的函数属性
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat.eat('fish'))
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
