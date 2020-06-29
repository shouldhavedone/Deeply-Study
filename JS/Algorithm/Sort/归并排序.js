/**
 * 归并排序
 * 时间复杂度：O(n log n), 最坏：O(n log n)  最好：O(n log n)
 * 空间复杂度：O(1)
 * 稳定
 * 占用额外内存
 */

/**
 * <1>.自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第2种方法）
 * <2>.自下而上的迭代
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

function mergeSort(arr) {
  if(arr.length < 2) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}

function merge(left, right) {
  let i = 0, j = 0
  let result = []
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  if(i < left.length) {
    result.push(...left.slice(i))
  } else {
    result.push(...right.slice(j))
  }
  return result
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(mergeSort(arr))