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
var preorderTraversal = function(root) {
  if(root === null) return [];
  if(root.left === null && root.right === null) return [root.val];
  let stack = [], list = [];
  stack.push(root);
  while(stack.length > 0) {
    const curNode = stack.pop();
    list.push(curNode.val);
    if(curNode.right !== null) stack.push(curNode.right);
    if(curNode.left !== null) stack.push(curNode.left);
  }
  return list;
};

