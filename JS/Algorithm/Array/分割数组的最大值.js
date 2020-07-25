/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let left = right = 0;
  for(let i = 0; i < nums.length; i++) {
    right += nums[i];
    if(left < nums[i]) left = nums[i];
  }

   while(left < right) {
     let mid = Math.floor((right - left) / 2) + left;
     if(check(nums, mid, m)) right = mid;
     else left = mid + 1;
   }
   return left;
};

function check(nums, x, m) {
  let sum = 0, cnt = 1;
  for(let i = 0; i < nums.length; i++) {
    if(sum + nums[i] > x) {
      cnt++;
      sum = nums[i]
    } else {
      sum += nums[i]
    }
  }
  return cnt <= m;
}

let nums = [7,2,5,10,8]
let m = 2
console.log(splitArray(nums, m))