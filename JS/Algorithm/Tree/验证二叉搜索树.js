/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//   const helper = (root, lower, upper) => {
//     if(root === null) return true;
//     if(root.val <= lower || root.val >= upper) return false;
//     return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
//   }

//   return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// };

var isValidBST = function(root) {
  let stack = [];
  let inorder = Number.MIN_SAFE_INTEGER;
  while(stack.length || root !== null) {
    while(root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if(root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
};
