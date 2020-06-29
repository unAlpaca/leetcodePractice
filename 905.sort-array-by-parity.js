/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    //前后2个指针i，j，一个从头往后，一个从尾往前
    //当A[i]不是偶数时，且A[j]不是奇数时，交换后，指针继续行动,否则单个指针运动

    let i = 0;
    let j = A.length-1;

    while(i<j){
        //i是奇数，j是偶数，换
        if(A[i]%2 == 1 && A[j]%2 == 0){
            [A[i],A[j]] = [A[j],A[i]];
            i++;
            j--
        }

        //i是奇数，j是奇数，不换，i++
        if(A[i]%2 == 1 && A[j]%2 == 1){
            j--;
        }

        //i是偶数，j是偶数，不换，j--
        if(A[i]%2 == 0 && A[j]%2 == 0){
            i++;
        }

        //i是偶数，j是奇数，不换，i++,j--
        if(A[i]%2 == 0 && A[j]%2 == 1){
            i++;
            j--;
        }
    }

    return A

    
};
// @lc code=end

