/**
 * 数组扁平化：将多层嵌套的数组转换为一维数组
 * [1, [1, 2, [1, 2, 3]], [1, 2, 3, 4]] => [1, 1, 2, 1, 2, 3, 1, 2, 3, 4]
 */

const arr = [1, [1, 2, [1, 2, 3]],
  [1, 2, 3, 4]
]

// 方法一：ES6中的flat()
arr.flat(Infinity)

// 方法二：序列化后正则
const str = `[${JSON.stringify(arr).replace(/(\[|\])/g, '')}]`
console.log(JSON.parse(str));

// 方法三：递归
function flat(arr) {
  let result = []
  for (const item of arr) {
    item instanceof Array
      ?
      result = result.concat(flat(item)) :
      result.push(item)
  }
  return result
}
console.log(flat(arr));

// 方法四：reduce() 递归
function flat(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur instanceof Array ? flat(cur) : cur)
  }, [])
}
console.log(flat(arr))

// 方式五：迭代+展开运算符
let array = arr
while(array.some(Array.isArray)) {
  array = [].concat(...array)
}
console.log(array)