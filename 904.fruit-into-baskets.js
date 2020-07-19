/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    const map = new Map();
    let max = 1;
    let j = 0;
    for(let i= 0 ;i<tree.length;i++){
        map.set(tree[i],i);
        if(map.size>2){
            let minIndex = tree.length - 1;
            for(const [fruit,index] of map){
                if(index < minIndex ){
                    minIndex = index
                }
            }
            map.delete(tree[minIndex]);
            j = minIndex + 1
        }

        max = Math.max(max,(i - j + 1))
    }

    return max
    
};
// @lc code=end

