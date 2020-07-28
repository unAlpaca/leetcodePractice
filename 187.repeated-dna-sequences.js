/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const map = new Map();
    const res = [];
    for(let i = 0;i + 10<=s.length;i++){
        let dna = s.substring(i,i+10);
        if(!map.has(dna)){
            map.set(dna,1)
        }else if(map.get(dna) == 1){
            map.set(dna,2)
            res.push(dna)
        }else{
            map.set(dna,map.get(dna)+1)
        }
    }
    return res
    
};
// @lc code=end

