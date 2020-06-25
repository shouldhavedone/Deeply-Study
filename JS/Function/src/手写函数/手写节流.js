/**
 * 节流：函数每隔一段时间执行一次
 * 函数的间隔执行
 * 原理：设置一个定时器，约定 xxx 毫秒后执行事件，如果时间到了，那么执行函数并重置定时器
 * 
 * 与防抖的区别：防抖每次触发事件之前都需要重置定时器
 *              节流在定时器到时间后再清空定时器
 */

 function throttle(func, wait) {
   let timeout = null
   return function() {
     let context = this
     let args = arguments
     if(!timeout) {
       timeout = setTimeout(() => {
         timeout = null
         func.apply(context, args)
       }, wait)
     }
   }
 }

 /**
  * 使用两个时间戳prev旧时间戳和now新时间戳，每次触发判断两者的时间差，如果达到规定时间，执行函数并重置旧时间戳
  */
 function throttle(func, wait) {
   let prev = 0
   return function() {
     let now = Date.now()
     let context = this
     let args = arguments
     if(now - prev > wait) {
       func.apply(context, args)
       prev = now
     }
   }
 }