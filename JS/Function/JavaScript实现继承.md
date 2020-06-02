# JS实现继承的几种方法

测试父类
```js
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
```
***
## 一、原型链继承
> 将父类的实例作为子类的原型
```js
function Cat() {
  this.age = 20
}
// Cat.prototype.sex = '男'
Cat.prototype = new Animal()
Cat.prototype.name = '猫'

let cat = new Cat()
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat.eat('fish'))
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
console.log(cat.age)
```

### 特点
* 非常存粹的继承关系，实例是子类的实例，也是父类的实例  
* 父类新增原型方法、属性，子类都可以访问到  
* 简单，易于实现

### 缺点
* 可以在子类的构造函数中添加新属性，但是如果要新增原型属性和方法，则必须放在`new Animal()` 这样的语句之后执行  
* 继承单一，无法实现多继承
* 来自原型对象的所有属性被所有实例共享(一个实例修改了原型属性，另一个实例的原型属性也会被修改)  
* 新实例无法向父类构造函数传参  
***
## 二、构造继承
> 使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类(没用到原型)，用.call()和.apply()将父类构造函数引入子类函数  
```js
function Cat(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}
let cat = new Cat() 
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
// console.log(cat.eat('fish'))
console.log(cat instanceof Animal)
console.log(cat instanceof Cat) 
```

### 特点
* 子类实例只继承了父类构造函数的属性，没有继承父类原型的属性
* 解决了原型链继承的缺点
* 可以继承多个构造函数的属性(call多个)
* 在子实例中可以向父实例传参

### 缺点
* 只能继承父类构造函数的属性
* 无法实现构造函数的复用(每次用都要重新调用)
* 每个子类都有父类构造函数的副本，臃肿，影响性能
***
## 三、组合继承
> 组合原型链继承和借用构造函数继承
```js
function Cat(name) {
  Animal.call(this, name) // 构造函数模式
}

Cat.prototype = new Animal() // 原型链继承
let cat = new Cat('Tom')
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat.eat('fish'))
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
```

### 特点
* 可以继承父类原型上的属性，可以传参，可复用
* 每个新实例引入的构造函数属性是私有的

### 缺点
* 调用了两次父类构造函数(消耗内存)，子类的构造函数会代替原型上的那个父类的构造函数
***
## 四、实例继承
> 为父类实例添加新特性，作为子类实例返回
```js
function Cat(name) {
  let instance = new Animal()
  instance.name = name || 'Tom'
  return instance
}

let cat = new Cat()
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
console.log(cat.eat('fish'))
```

### 特点
* 不限制调用方式，不管是 `new` 子类() 还是子类()，返回的对象具有相同的效果
* 继承了父类的实例属性和原型属性

### 缺点
* 实例是父类的实例，不是子类的实例
* 不支持多继承
***
## 五、拷贝继承
```js
function Cat(name) {
  let animal = new Animal()
  for( let i in animal ) {
    Cat.prototype[i] = animal[i]
  }
  Cat.prototype.name = name || 'Tom'
}
let cat = new Cat()
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat.eat('fish'))
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
```

### 特点
* 支持多继承

### 缺点
* 效率较低，内存占用高(要拷贝父类属性)
* 无法获取父类不可枚举的方法(不可枚举的方法，不能使用 `for in` 访问到)
***
## 六、原型式继承
> 用一个函数包装对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象
```js
function Cat(obj) {
  function A(){}
  A.prototype = obj
  return new A
}

let animal = new Animal();
let cat = new Cat(animal)
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat.eat('fish'))
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
```

### 特点
* 类似于复制一个对象， 用函数来包装

### 缺点
* 所有实例都会继承原型上的属性
* 无法实现复用（新实例属性都是后面添加的）

***
## 七、寄生式继承
> 和工厂模式类似，即创建一个仅用于封装继承过程中的函数，该函数在内部以某种方式来增强对象，最后返回对象，就是给原型式继承外面套一个壳子

```js
function Content(obj) {
  function A(){}
  A.prototype = obj // 继承了传入的参数
  return new A()  // 返回一个函数对象
}

let animal = new Animal()
// 以上是原型式继承，给原型式继承再套个壳子传递参数
function Cat(obj) {
  let sub = Content(obj)
  sub.name = "Cat"
  return sub
}

let cat = Cat(animal)
// 这个函数经过声明后就成了可增添属性的对象
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat.eat('fish'))
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
```

### 特点
* 没有创建自定义类型，因为只是讨论一个壳子返回对象，这个函数就成了创建的新对象

### 缺点
* 没有到原型，无法复用
***
## 八、寄生组合式继承

* **寄生：**在函数内返回对象然后调用
* **组合：**函数的原型等于另一个实例，在函数中用apply或call引用另一个构造函数，可传参

```js
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
```