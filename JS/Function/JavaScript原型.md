# 原型
![原型](./images/prototype.png)

* 每个函数都有`prototype`属性，除了`Function.prototype.bind()`，该属性指向原型
* 每个对象都有`__proto__`属性，指向了创建该对象的构造函数的原型。其实这个属性指向了`[[prototype]]`,但是`[[prototype]]`是内部属性，并不能访问，所以使用`__proto__`访问
* 对象可以通过`__proto__`来寻找不属于该对象的属性，`__proto__`将对象连接起来组成原型链

## prototype
`prototype`是显式原型属性，只有函数才拥有该属性，除了`Function.prototype.bind()`
> let fun = Function.prototype.bind() 创建的fun方法不具有`prototype`属性

## __proto__
`__proto__`是隐式原型属性，指向了创建该对象的构造函数的原型