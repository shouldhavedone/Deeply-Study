/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let len = nums.length;
  let left = 0, right = len - 1;
  let index = len;
  while(left <= right) {
      let mid = Math.floor((right - left) / 2) + left;
      if(target <= nums[mid]) {
          index = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return index;
};