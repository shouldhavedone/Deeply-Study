/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
  if(!head || !head.next) return head
  let next = head.next;
  let p = reverseList(next);
  head.next = null;
  next.next = head;
  return p;
};