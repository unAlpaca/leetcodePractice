/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head == null) return null
    if(head.next == null ) return head
    let oddPointer = head;
    let evenPointer = head.next;
    let evenHead = head.next

    while(evenPointer !== null && evenPointer.next !== null){
        oddPointer.next = oddPointer.next.next;
        oddPointer = oddPointer.next
        evenPointer.next = evenPointer.next.next;
        evenPointer = evenPointer.next;
    }

    oddPointer.next = evenHead
    return head
};
// @lc code=end

