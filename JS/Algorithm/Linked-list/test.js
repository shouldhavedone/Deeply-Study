/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 21:09:49
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-27 21:19:48
 */
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
    if(head === null || head.next === null) return head
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return head
};

let head = new ListNode(1)
let a = new ListNode(2)
let b = new ListNode(3)
let c = new ListNode(4)
head.next = a
a.next = b
b.next = c
c.next = null

let that = reverseList(head)

while(that){
  console.log(that.val)
  that = that.next;
}