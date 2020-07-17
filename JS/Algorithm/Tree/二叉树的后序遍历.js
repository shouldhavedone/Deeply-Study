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
var postorderTraversal = function(root) {
  if(root === null) return [];
  let list = [];
  function pushRoot(root) {
      root.left && pushRoot(root.left);
      root.right && pushRoot(root.right);
      list.push(root.val);
  }
  pushRoot(root);
  return list;
};

var postorderTraversal = function(root) {
  let list = [], stack = []
  while (root || stack.length) {
      list.unshift(root.val)
      if (root.left) stack.push(root.left)
      if (root.right) stack.push(root.right)
      root = stack.pop()
  }
  return list
};