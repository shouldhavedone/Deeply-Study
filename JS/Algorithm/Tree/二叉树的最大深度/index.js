function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var maxDepth = function(root) {
  if(root == null){
    return 0
  }
  var left = maxDepth(root.left)
  var right = maxDepth(root.right)
  return Math.max(left, right) + 1
};

var root = new TreeNode(3)
var t1 = new TreeNode(9)
var t2 = new TreeNode(20)
var t3 = new TreeNode(15)
var t4 = new TreeNode(7)
var t5 = new TreeNode(10)
t2.left = t3
t2.right = t4
t4.left = t5
root.left = t1
root.right = t2
console.log(maxDepth(root))