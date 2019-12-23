/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-22 00:06:41
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-22 00:50:27
 */
/*
两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:
给定 1->2->3->4, 你应该返回 2->1->4->3.
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var swapPairs = function(head) {
  if(head == null || head.next == null){
    return head
  }
  let next = head.next
  head.next = swapPairs(next.next)
  next.next = head
  return next
};