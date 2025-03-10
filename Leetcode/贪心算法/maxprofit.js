/**
 * 解题思路：贪心算法
 * 首先需要明白规则，买入一定发生在卖出前面，也可以根据生活实际来联想
 * 如果想要获取最大利润，那么，我们需要在价格最低的时候买入，在价格最高的时候卖出
 * 所以，需要遍历数组，记录最小值，在每一次遍历的时候都需要比对，更新最小值
 * 现在已经买入了一个股票，那么，需要在什么时候卖出呢？
 * 这时候把我们自己放在场景中，由于我们只能知道今天股票的价格，所以如果今天的价格大于最小价格，那么我们就假设可以卖出，但是不一定是最大利润，
 * 我们需要再等等，看看过几天是否利润会增加，所以需要遍历完整个数组，看看哪天卖出的利润最大
 * 但是不一定是最大利润，所以在每一次遍历的时候，如果当前元素大于最小价格，并且当前元素减去最小价格大于最大利润，那么就更新最大利润
 * 最后返回最大利润即可
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {*} prices 
 * @returns 
 */

const maxprofit = (prices) => {
    // 初始化最小价格为无穷大
    let minPrice = Infinity;
    // 如果没有合适的时机，价格一直递增，则不买，利润为 0 ，所以将其初始化为 0
    let maxProfit = 0;
    // 遍历价格数组
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; 
        }
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; 
        } 
    }
    return maxProfit;
}

const prices = [7,6,4,3,1];

console.log(maxprofit(prices));