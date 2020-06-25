// 手动实现new
function create() {
  // 创建一个新对象
  let obj = {}
  // 获取构造函数
  let Con = [].shift.call(arguments)
  // 新对象连接到原型
  obj.__proto__ = Con.prototype
  // 绑定this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 返回对象
  return typeof result === 'object' ? result : obj
}

// 测试
function Person(name, age) { // 构造函数
  this.name = name 
  this.age = age
}
Person.prototype.sayName = function() {
  console.log(this.name)
}

let person1 = new Person('Tom', 20) // 使用new方法
person1.sayName()

let person2 = create(Person, 'Jarry', 20) // 使用create方法
person2.sayName()
