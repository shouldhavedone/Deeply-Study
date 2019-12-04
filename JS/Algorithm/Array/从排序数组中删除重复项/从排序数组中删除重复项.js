/*
思路：
这道题的思路就是采用两个标记点 number 和 i
number记录不重复元素的位置，i从number的下一个开始遍历数组
如果i位置的数字等于number位置的数字，说明该数字重复出现，不予处理；
如果i位置的数字不等于number位置的数字，说明该数字没有重复，需要放到l的下一位置，并使number加1。
*/

var removeDuplicates = function(arr) {
  var number = 0
  for(var i = 0; i < arr.length; i++){
      if(arr[i] != arr[number]){
          number++
          arr[number] = arr[i]
      }
  }
  return number + 1
};

let arr = [1, 1, 2, 2 , 3, 4, 5];
console.log(removeDuplicates(arr));