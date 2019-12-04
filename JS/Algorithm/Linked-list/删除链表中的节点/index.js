/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

var node = new ListNode(4)
var n2 = new ListNode(5)
var n3 = new ListNode(1)
var n4 = new ListNode(9) 
node.next = n2;
n2.next = n3;
n3.next = n4;

var that = node;

while(that){
  console.log(that.val)
  that = that.next;
}