/**
 * 防抖：短时间内大量触发同一事件，只会执行一次函数
 * 函数的延迟执行
 * 原理：设置一个定时器，约定在 xxx 毫秒后再触发事件处理，每次触发事件都会重新设置计时器，直到 xxx 毫秒内无第二次操作
 * 防抖常用与搜索框/滚动条的监听事件处理
 * 造成性能浪费
 */

 /**
  * func => 触发的事件
  * wait => 等待时间
  */
function debounce(func, wait) {
  let timeout = null
  return function() {
    let context = this
    let args = arguments
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}