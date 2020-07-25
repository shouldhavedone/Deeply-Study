/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let result = 0;
  while(left < right) {
    let area = Math.min(height[right], height[left]) * (right - left);
    result = Math.max(result, area);
    if(height[left] <= height[right]) ++left;
    else --right;
  }
  return result;
};

