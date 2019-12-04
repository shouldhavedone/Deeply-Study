/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-04 23:09:09
 * @LastEditors: WuTao
 * @LastEditTime: 2019-12-04 23:53:58
 */

/**
 * @name: 冒泡排序
 * @test: test font
 * @msg: 未优化
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
 * @name: 冒泡排序
 * @test: test font
 * @msg: 优化
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

let arr = [7, 8, 4, 5, 6, 3, 2, 1]
bubbleSort(arr)
console.log("---------------")
bubbleSort2(arr)