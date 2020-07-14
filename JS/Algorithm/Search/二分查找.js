/**
 * 二分查找，也称折半查找
 * 利用二分思想，每次查找的时候把数据分为两半，从中间值开始找
 * 时间复杂度：O(logn)
 */

// 非递归
function binary_search(arr, key) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let middle = parseInt(low + (high - low) / 2) // 如果low+high很大的话，会溢出
    if (key === arr[middle]) {
      return middle
    } else if (key < arr[middle]) {
      high = middle - 1
    } else if (key > arr[middle]) {
      low = middle + 1
    }
  }
  return -1
}

// 递归
function binary_search2(arr, low, high, key) {
  if(low > high) return -1
  let middle = low + ((high - low) >> 1)
  if(arr[middle] == key) {
    return middle
  } else if (arr[middle] > key) {
    high = middle - 1
    return binary_search2(arr, low, high, key)
  } else if (arr[middle] < key) {
    low = middle + 1
    return binary_search2(arr, low, high, key)
  }
}

let arr = [5, 13, 19, 21, 37, 56, 64, 75, 80, 88, 92];
var result = binary_search(arr, 21);
console.log(result);
var result2 = binary_search2(arr,0, 11, 21);
console.log(result2)