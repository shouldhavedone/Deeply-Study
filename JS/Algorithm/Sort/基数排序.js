/**
 * 基数排序
 * 时间复杂度：O(n * k), 最坏：O(n * k)  最好：O(n * k)
 * 空间复杂度：O(n + k)
 * 稳定
 * 占用额外内存
 * 按照数字的“位”来排序。位，是进位的位，比如十进制数的基数是10，就可以按照个十百千万等位来排序。
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

function radixSort(arr) {
  let maxLength = 0
  for(let v of arr) {
    let length = String(v).length
    if(length > maxLength) {
      maxLength = length
    }
  }
  for(let i = 0; i < maxLength; i++) {
    arr = sort(arr, i)
  }
  function sort(arr, index) {
    let buckets = []
    for(let i = 0; i < 10; i++) {
      buckets.push([])
    }
    for(let v of arr) {
      let pad = String(v).padStart(maxLength, '0')
      let num = pad[maxLength - 1 - index]
      buckets[num].push(v)
    }
    let result = []
    for(let bucket of buckets) {
      result.push(...bucket)
    }
    return result
  }
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(radixSort(arr))