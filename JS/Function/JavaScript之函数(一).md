# JavaScript之函数(一)
> 在JavaScript中，函数是一种对象，所以可以说函数是JavaScript里的一等公民
## 一.函数的三种定义方式
### 1.函数声明
```javascript
// ES5
function getSon(){}
function (){} // 匿名函数

// ES6
() => {} // 如果{}内容只有一行，则{}与return都可以省略
```

### 2.函数表达式（函数字面量）
```javascript
// ES5
var son = function(){}

// ES6
let son = () => {} // 如果{}内容只有一行，则{}与return都可以省略
```

> 两者的区别：解析器会先读取函数声明，并使其在执行任何代码之前可以访问；而函数表达式则必须等到解析器执行到它所在的代码行才会真正被解释执行。

### 3.构造函数
> 参数必须加引号
```javascript
var sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3)); // 5
```
### 4.三者区别
> 1.函数声明有预解析,而且函数声明的优先级高于变量;   

> 2.使用Function构造函数定义函数的方式是一个函数表达式,这种方式会导致解析两次代码，影响性能。第一次解析常规的JavaScript代码，第二次解析传入构造函数的字符串
```javascript
function f(){ return 1 }  
console.log( f() )   // 第四个函数把第一个函数覆盖
var f = new Function( "return 2" )
console.log( f() )   // 第二个函数把第四个函数覆盖
var f = function() { return 3 }
console.log( f() )   // 第三个函数把第二个函数覆盖
function f(){ return 4 }
console.log( f() )   // 第四个函数已经被覆盖
var f = new Function("return 5;");
console.log( f() )   // 第五个函数把第三个函数覆盖
var f = function(){ return 6 }
console.log( f() )   // 第六个函数把第五个函数覆盖

// 输出：4 2 3 3 5 6
// 先找出函数声明，“返回值是4的函数声明”覆盖了“返回值是1的函数声明”，所以第一个f()的结果是4
```

## 二.函数的四种调用方式
> 在ES5中函数内容的this指向和调用方法有关
### 1.函数调用模式
> 包括函数名()和匿名函数调用,this指向window
```javascript
 function getSon() {
    console.log(this) // 函数名调用，this指向window
 }
 getSon()
 (function() {
    console.log(this) // 匿名函数调用，this指向window
 })()
 var getSon = function() {
    console.log(this) // 函数名调用，window
 }
 getSon()
```
> 单独独立调用的, 就是函数调用模式, 即 函数名( 参数 ), 不加任何其他的东西, 任何自调用函数都是函数调用模式
### 2.方法调用模式
> 方法调用，就是用对象的方法调用  
> 对象.方法名()  
> this指向对象
```javascript
var length = 10;
function fn() {
  console.log( this.length ); // 10
}
var obj = {
  length: 5,
  method: function ( fn ) {
    fn(); // 10 前面没有引导对象，是函数调用模式
    arguments[ 0 ](); // 2
    // 这里 this 就是 指的这个伪数组， 所以 this.length 为 2 (伪数组长度)
  }
};
obj.method( fn, 1 );  // 10 2
//obj.method( fn, 1， 2， 3 );  // 10 4
```
对比函数调用模式
* 方法调用模式不是独立的，需要宿主，而函数调用模式是独立的
* 方法调用模式方式：obj.fuc(); 函数调用模式方式: fuc();
* 法调用模式中，this指宿主; 而函数调用模式中 this 指 全局对象window
### 3.构造器调用模式
> new 构造函数名(),this指向实例化的对象  
> 在使用prototype的方法时，必须实例化该对象才能调用其方法
```javascript
var fun = function(a){
　　this.a = a;
}
fun.prototype = {
　show:function(){
    alert( this.a )
  }
}
var newFun = new fun( "123123123" )
newFun.show();
```
### 4.apply,call调用模式
> 利用call和apply来实现,this就是call和apply对应的第一个参数,如果不传值或者第一个值为null,undefined时this指向window
```javascript
var obj = {}
var sum = function(a, b){
　　return a + b
};
var newSum = sum.call(obj, 10, 30); // var newSum = sum.apply(obj, [10, 30]) 
alert(newSum)
```
### 5.ES6中函数调用
> 箭头函数不可以当作构造函数使用，即不能用new命令实例化一个对象，否则会抛出一个错误
> 箭头函数的this是和定义时有关和调用无关, 调用就是函数调用模式
```javascript
(() => {
  console.log(this)// window
})()

let fun = () => {
  console.log(this) // window
}
fun()
let obj = {
  arrFun: function() {
    (() => {
      console.log(this) // this指向的是obj对象
    })()
  }
}
obj.arrFun(); // obj对象
```

