/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  let list = [];
  let fun = (root) => {
      root.left && fun(root.left);
      list.push(root.val);
      root.right && fun(root.right);
  }
  root && fun(root);
  return list;
};

var inorderTraversal = function(root) {
  let list = [], stack = []
  while (root || stack.length) {
      if (root.left) stack.push(root.left)
      list.unshift(root.val)
      if (root.right) stack.push(root.right)
      root = stack.pop()
  }
  return list
};