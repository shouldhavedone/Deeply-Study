/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  if(root === nmll) return result;
  const list = [];
  list.push(root);
  while(list.length !== 0) {
    const currentLevelSize = list.length;
    result.push([]);
    for(let i = 1; i <= currentLevelSize; i++) {
      const node = list.shift();
      result[result.length - 1].push(node.val);
      if(node.left) list.push(node.left);
      if(node.right) list.push(node.right);
    }
  }
  return result;
};