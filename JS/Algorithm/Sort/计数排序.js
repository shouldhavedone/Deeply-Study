/**
 * 计数排序
 * 时间复杂度：O(n log n), 最坏：O(n log^2 n)  最好：O(n log^2 n)
 * 空间复杂度：O(1)
 * 稳定
 * 占用额外内存
 * 将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

function countingSort(arr) {
  let min = Infinity
  for (let v of arr) {
    if (v < min) {
      min = v
    }
  }
  let counts = []
  for (let v of arr) {
    counts[v - min] = (counts[v - min] || 0) + 1
  }
  let index = 0
  for (let i = 0; i < counts.length; i++) {
    let count = counts[i]
    while (count > 0) {
      arr[index] = i + min
      count--
      index++
    }
  }
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(countingSort(arr))