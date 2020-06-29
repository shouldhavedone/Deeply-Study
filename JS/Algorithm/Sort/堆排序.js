/**
 * 堆排序
 * 时间复杂度：O(n log n), 最坏：O(n log n)  最好：O(log n)
 * 空间复杂度：O(1)
 * 不稳定
 * 不占用额外内存
 */

/**
 * <1>.大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列
 * <2>.小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

 let len = null
function buildMaxHeap(arr) { // 建立大顶堆
  len = arr.length
  for(let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify(arr, i) { // 堆调整
  let left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i
  if(left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if(right < len && arr[right] > arr[largest]) {
    largest = right
  }
  if(largest != i) {
    swap(arr, i, largest)
    heapify(arr, largest)
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapSort(arr) {
  buildMaxHeap(arr)
  for(let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    len--
    heapify(arr, 0)
  }
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(heapSort(arr))