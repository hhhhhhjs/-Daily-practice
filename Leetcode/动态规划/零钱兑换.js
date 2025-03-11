// 零钱兑换
// 给定一个硬币数组，一个面值，找出可以凑出这个面值的最少硬币数字，如果没有则返回0
// 运用动态规划思想，首先找到可以组成这个硬币的面值，然后去寻找可以组成被分解出来的硬币
const coinChange = (coins, amount) => {
    // 初始化 dp 数组，用来存储从 0 到这个面值的所有面值所需要的硬币数
    // 由于数组从 0 开始索引，所以将其封装为 长度为 amount + 1 的数组
    const dp = new Array(amount + 1).fill(Infinity) // 所有元素均规定为无穷大，因为想要找最小值
    dp[0] = 0 // 如果面值为 0 ，当然没有硬币可以组成，直接将其规定为 0

    // 遍历每一个面值
    for (let i = 1; i <= amount; i++) {
        // 遍历硬币数组
        for (let coin of coins) {
            // 判断硬币元素的数值是否比当前遍历的面值要小或者等于，如果小，则说明能用
            if (coin <= i) {
                // 更新 dp 的值, 因为会有多种组合，现在只需要最小的
                dp[i] = Math.min(dp[i], dp[i - coin] + 1) // + 1 表示这个硬币被使用了一次,然后就会转化为组成前面的面值所需要的最小硬币数，但是前面的已经是最小了，直接用就行
            }
        }
    }
    // 如果 amount + 1 元素的值还是 Infinity ，则说明没有匹配的硬币
    return dp[amount] === Infinity ? -1 : dp[amount]
}

// 测试用例
console.log(coinChange([1, 2, 5],11))
console.log(coinChange([2],3))