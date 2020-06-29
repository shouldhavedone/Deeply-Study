/**
 * 快速排序
 * 时间复杂度：O(n log n), 最坏：O(n^2)  最好：O(log n)
 * 空间复杂度：O(log n)
 * 不稳定
 * 不占用额外内存
 * 快速排序的内循环比大多数排序算法都要短小，这意味着它无论是在理论上还是在实际中都要更快。
 * 它的主要缺点是非常脆弱，在实现时要非常小心才能避免低劣的性能。
 */

/**
 * <1>.自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第2种方法）
 * <2>.自下而上的迭代
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left >= right) return arr
  let pivotIndex = partition(arr, left, right)
  quickSort(arr, left, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, right)
  return arr
}

function partition(arr, left, right) {
  let index = left
  let pivot = arr[right]
  for(let i = left; i <= right; i++) {
    if(arr[i] <= pivot) {
      swap(arr, i, index++)
    }
  }
  return index - 1
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(quickSort(arr))
