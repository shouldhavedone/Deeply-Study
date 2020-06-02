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