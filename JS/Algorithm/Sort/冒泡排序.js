/**
 * 冒泡排序
 * 时间复杂度：O(n^2), 最坏：O(n^2)  最好：O(n)
 * 空间复杂度：O(1)
 * 稳定
 * 不占用额外内存
 */

/**
 * <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * <3>.针对所有的元素重复以上的步骤，除了最后一个；
 * <4>.重复步骤1~3，直到排序完成。
 */

 /**
  * @param {Array} arr 
  * @returns {Array}
  */
function bubbleSort1(arr) {
  let len = arr.length
  console.time('1');
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {  // 相邻元素对比
        let temp = arr[j + 1] // 交换相邻元素
        arr[j + 1] = arr[j]
        arr[j] = temp
      }      
    }
  }
  console.timeEnd('1')
  return arr
}

//算法改进：添加一个标志变量，用于记录每趟排序中最后一次交换的位置

function bubbleSort2(arr) {
  let i = arr.length - 1
  console.time('2');
  while(i > 0) {
    let pos = 0 // 每趟开始时，无记录交换
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        pos = j // 记录交换位置
        let temp = arr[j + 1]
        arr[j + i] = arr[j]
        arr[j] = temp
       }
    }
    i = pos
  }
  console.timeEnd('2')
  return arr
}

// 算法改进：每趟排序中进行正向和反向两遍冒泡，一次得到两个最终值（最大、最小值），从而使排序趟数减少

function bubbleSort3(arr) {
  let low = 0
  let high = arr.length - 1
  let temp
  console.time("3");
  while(low < high) {
    for(let j = low; j < high; j++) { // 正向冒泡，找到最大者
      if(arr[j] > arr[j + 1]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    --high // 修改high值，前移一位
    for(let j = high; j > low; j--) { // 反向冒泡，找到最小者
      if(arr[j] < arr[j - 1]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    ++low // 修改low值，后移一位
  }
  console.timeEnd('3')
  return arr
}
