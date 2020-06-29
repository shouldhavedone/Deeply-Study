/**
 * 希尔排序
 * 时间复杂度：O(n log n), 最坏：O(n log^2 n)  最好：O(n log^2 n)
 * 空间复杂度：O(1)
 * 不稳定
 * 不占用额外内存
 */

/**
 * <1>.选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
 * <2>.按增量序列个数k，对序列进行k 趟排序；
 * <3>..每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

function shellSort(arr) {
  let len = arr.length
  let temp, gap = 1
  console.time('1'); 
  while (gap < len / 5) {
    gap = gap * 5 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  console.timeEnd('1')
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(shellSort(arr))