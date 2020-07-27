/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function(head) {
    
    let prev = null;
    let cur = head;
    let next = head;

    while(cur !== null){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev
};
// @lc code=end

