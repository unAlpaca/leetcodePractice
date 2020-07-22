/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
var middleNode = function(head) {
    //定义2个快慢指针
    var slowPointer = head;
    var fastPointer = head;

    //慢指针一步，快指针2步，就可以再快指针到头时，保证慢指针在中间
    while(fastPointer !== null && fastPointer.next !== null){

        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next
    }

    return slowPointer
};
// @lc code=end

