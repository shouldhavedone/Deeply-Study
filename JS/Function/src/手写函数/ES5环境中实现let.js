// 源代码
for (let i = 0; i < 10; i++) {
  console.log(i); 
}
console.log(i);

// babel 转化后
for (var _i = 0; _i < 10; _i++) {
  console.log(_i);
}
console.log(i);


/**
 * （1）var 声明的变量会挂到window上，而let和const不会
 * （2）var 声明的变量存在变量提升，而let和const不会
 * （3）let 和 const 声明形成块级作用域，只能在块级作用域内访问，不能跨域访问，也不能跨函数访问
 * （4）同一作用域下，let 和 const 不能声明同名变量，而var可以
 * （5）let 和 const 会形成暂时性死区，不能在声明前被使用
 */

 // babel 的转化，其实只实现了2、3、5 点