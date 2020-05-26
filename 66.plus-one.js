/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //从尾巴遍历，但是只执行一次计算，如果有进位就移到倒数第二位+1，倒数第一位变0

    for(let i = digits.length - 1;i>=0;i--){
        if(digits[i] != 9){
            digits[i]++
            return digits
        }else{
            digits[i] = 0
        }
    }
    //如果代码执行到此处，说明一种情况，就是每次都是走的上面的else
    //意味着 999 这种情况
    //那就把进位补上
    return [1,...digits]
};
// @lc code=end

