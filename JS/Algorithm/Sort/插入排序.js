/**
 * 插入排序
 * 时间复杂度：O(n^2), 最坏：O(n^2)  最好：O(n)
 * 空间复杂度：O(1)
 * 稳定
 * 不占用额外内存
 */

/**
 * <1>.从第一个元素开始，该元素可以认为已经被排序；
 * <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * <5>.将新元素插入到该位置后；
 * <6>.重复步骤2~5。
 */

/**
 * @param {Array} arr 
 * @returns {Array}
 */

function insertionSort(arr) {
  console.time('1');
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  console.timeEnd('1')
  return arr
}

// 改进算法：查找插入位置时使用二分查找
function binaryInsertionSort(arr) {
  console.time('2');
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let left = 0,
      right = i - 1
    while (left <= right) {
      let middle = parseInt((left + right) / 2)
      if (key < arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    arr[left] = key
  }
  console.timeEnd('2')
  return arr
}


var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr))
console.log(binaryInsertionSort(arr))