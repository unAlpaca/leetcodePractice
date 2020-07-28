/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function helpCompare(left,right){
        while(left < right){
            if(s[left] !== s[right]){
                return false
            }
            left++;
            right--;
        }
        return true
    }
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]){
            var res = helpCompare(left+1,right) || helpCompare(left,right-1)

            return res
        }
        left++;
        right--;
    }

    return true
};
// @lc code=end

