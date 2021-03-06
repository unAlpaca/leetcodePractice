/**
 * leetcode.88
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。


示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
*/


/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/
/* function ListNode(val) {
    *     this.val = val;
    *     this.next = null;
    * }
    * @param {ListNode} l1
    * @param {ListNode} l2
    * @return {ListNode}
    */

/**leetcode 56
 * 
*/

    
// var threeSum = function(nums) {
//     let res = [];
//     let hashMap = new Map();
//     let target = 0;
//     for(let i = 0; i< nums.length-2;i++){
//         for(let j = i + 1;j<nums.length-1;j++){
            
//             if(hashMap.has(nums[j])){
//                 res.push(hashMap.get(nums[j]).concat(nums[j]))
//             }else{
//                 let key = target - (nums[i] + nums[j]);
//                 hashMap.set(key,[nums[i],nums[j]])
//             }
//         }
//     }
//     return res
// }

// threeSum([-1,0,1,2,-1,-4])

let p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve()
    },1000)
}).then(()=>{
    console.log(1);
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve()
    },2000)
}).then(()=>{
    console.log(2);
})

let p3 = Promise.all([p1,p2]).then(()=>{
    console.log(3);
})