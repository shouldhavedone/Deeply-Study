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

var length = 10;
function fn() {
  console.log( this.length ); // 10
}
var obj = {
  length: 5,
  method: function ( fn ) {
    fn(); // 10 前面没有引导对象，是函数调用模式
    arguments[ 0 ](); // 2
    // arguments是一个伪数组对象, 这里调用相当于通过数组的索引来调用.
    // 这里 this 就是 指的这个伪数组， 所以 this.length 为 2
  }
};
obj.method( fn, 1 );  // 10 2
//obj.method( fn, 1， 2， 3 );  // 10 4

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
      console.log(this) // this指向的是arrowObj对象
    })()
  }
}
obj.arrFun();