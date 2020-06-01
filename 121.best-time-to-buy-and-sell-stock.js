/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //如果数组为空，就返回0
    if(prices.length === 0 ) return 0;

    //统计当前价格左边的价格最低点，
    let minPrice = prices[0],
    maxProfit = 0;

    for(let i = 0;i<prices.length;i++){
        //如果比当前价格小，则跟新最小值，因为此时利润肯定位负数
        if(prices[i]<minPrice){
            minPrice = prices[i]

            //当存在利润时候，比较当前利润是否位最大
        }else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice
        }
    }

    return maxProfit
};
// @lc code=end

