/**
 * 桶排序
 * 时间复杂度：O(n + k), 最坏：O(n ^ 2)  最好：O(n + k)
 * 空间复杂度：O(n + k)
 * 稳定
 * 占用额外内存
 * 桶排序就是先分类，即把数据放进相应的桶里，然后对每个桶进行局部排序，最后再把桶合并一下就行了。
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

function bucketSort(arr, size = 10) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let count = Math.floor((max - min) / size) + 1

  let buckets = []
  for (let i = 0; i < count; i++) {
    buckets.push([])
  }
  for (let v of arr) {
    let num = Math.floor((v - min) / size)
    buckets[num].push(v)
  }
  let result = []

  for (let bucket of buckets) {
    result.push(...insertionSort(bucket))
  }
  return result
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bucketSort(arr))