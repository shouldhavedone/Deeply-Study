/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) return null;
  let buildBST = (nums, start, end) => {
    if(start > end) return null;
    let mid = (start + end) >>> 1;
    let root = new TreeNode(nums[mid])
    root.left = buildBST(nums, start, mid - 1);
    root.right = buildBST(nums, mid + 1, end);
    return root;
  }
  return buildBST(nums, 0, nums.length - 1);
};