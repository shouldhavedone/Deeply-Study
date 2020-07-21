/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = (n) => {
  if (n == 0) return [];
  const memo = new Array(n + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n + 1);
  }
  const getAllBSTs = (low, high) => {
    if (low > high) return [null];
    if (memo[low][high]) return memo[low][high];
    if (low == high) return [new TreeNode(low)];
    const res = [];
    for (let i = low; i <= high; i++) {
      const leftBSTs = getAllBSTs(low, i - 1);
      const rightBSTs = getAllBSTs(i + 1, high);
      for (const leftBST of leftBSTs) {
        for (const rightBST of rightBSTs) {
          const root = new TreeNode(i);
          root.left = leftBST;
          root.right = rightBST;
          res.push(root);
        }
      }
    }
    return memo[low][high] = res;
  };
  return getAllBSTs(1, n);
}