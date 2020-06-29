/**
 * 选择排序
 * 时间复杂度：O(n^2), 最坏：O(n^2)  最好：O(n^2)
 * 空间复杂度：O(1)
 * 不稳定
 * 不占用额外内存
 */

/**
 * <1>.初始状态：无序区为R[1..n]，有序区为空；
 * <2>.第i趟排序(i=1,2,3...n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
 * <3>.n-1趟结束，数组有序化了。
 */

 /**
  * @param {Array} arr 
  * @returns {Array}
  */

function selectionSort(arr) {
  let minIndex, temp
  console.time('1');
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) { // 寻找最小的数
        minIndex = j // 将最小数的索引保存
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd('1')
  return arr
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));