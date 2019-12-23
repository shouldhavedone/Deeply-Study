/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-04 23:09:09
 * @LastEditors: WuTao
 * @LastEditTime: 2019-12-14 23:16:30
 */

/**
 * @name: 冒泡排序bubbleSort
 * @test: test font
 * @msg: 未优化，最佳情况：T(n) = O(n)，最差情况：T(n) = O(n2)，平均情况：T(n) = O(n2)
 * @param {Array arr} 
 * @return: 
 */

const bubbleSort = arr => {
  console.time("未改进的冒泡耗时：")
  const length = arr.length
  if(length <= 1) return ;
  for(let i = 0; i < length - 1; i++){
    for(let j = 0; j < length - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log("改进前arr：", arr)
  console.timeEnd("未改进的冒泡耗时：")
}


/**
 * @name: 冒泡排序bubbleSort2
 * @test: test font
 * @msg: 优化，最佳情况：T(n) = O(n)，最差情况：T(n) = O(n2)，平均情况：T(n) = O(n2)
 * @param {Array arr} 
 * @return: 
 */
const bubbleSort2 = arr => {
  console.time("优化后的冒泡耗时：")
  const length = arr.length
  if(length <= 1) return 
  for(let i = 0; i < length - 1; i++){
    let hasChange = false
    for(let j = 0; j < length - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        hasChange = true
      }
      if(!hasChange) break
    }
  }
  console.log("优化后：", arr)
  console.timeEnd("优化后的冒泡耗时：")
}

/**
 * @name: 选择排序selectionSort
 * @test: test font
 * @msg: 最佳情况：T(n) = O(n2)，最差情况：T(n) = O(n2)，平均情况：T(n) = O(n2)
 * @param {Array arr} 
 * @return: 
 */
const selectionSort = arr => {
  console.time("选择排序耗时：")
  const length = arr.length
  for(let i = 0; i < length; i++){
    let minIndex = i
    for(let j = i + 1; j < length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd("选择排序耗时：")
  console.log("排序后：", arr)
}


/**
 * @name: 插入排序——直接排序 insertionSort
 * @test: test font
 * @msg: 最佳情况：T(n) = O(n)，最差情况：T(n) = O(n2)，平均情况：T(n) = O(n2)。
 * @param {Array arr} 
 * @return: 
 */
const insertionSort = arr => {
  console.time("直接插入排序：")
  const length = arr.length
  if(length <= 1) return 
  let preIndex, current
  for(let i = 1; i < length; i++){
    preIndex = i - 1 // 待比较元素的下标
    current = arr[i] // 当前元素
    while(preIndex >= 0 && arr[preIndex] > current){
      arr[preIndex + 1] = arr[preIndex] // 将待比较元素向后后移动一位
      preIndex-- // 游标前移一位
    }
    if(preIndex + 1 != i){ // 避免同一个元素赋值给自身
      arr[preIndex + 1] = current
    }
  }
  console.timeEnd("直接插入排序：")
  console.log("直接排序后：", arr)
}


/**
 * @name: binaryInsertionSort
 * @test: test font
 * @msg: 
 * @param {Array} 
 * @return: 
 */
const binaryInsertionSort = arr => {
  console.time("折半插入排序：")
  const length = arr.length
  if(length <= 1) return
  for(let i = 0; i < length; i++){
    let key = arr[i], left = 0, right = i - 1
    while(left <= right){
      let mid = (left <= right) >> 1
      if(key < arr[mid]){
        right = mid  -1
      } else {
        left = mid + 1
      }
    }
    for(let j = i - 1; j >= left; j--){
      arr[j + 1] = arr[j]
    }
    arr[left] = key
  }
  console.timeEnd("折半插入排序：")
  console.log("折半排序后：", arr)
}
