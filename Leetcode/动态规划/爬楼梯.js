// 爬楼梯是经典动态规划问题：
// 可以将问题分解为子问题，即爬第 n 阶楼梯的方法数等于爬 n-1 阶楼梯的方法数加上爬 n-2 阶楼梯的方法数。
// 状态转移方程为：dp[i] = dp[i-1] + dp[i-2]

// step1:
const climbStairs = (n) => {
    // 首先需要规定边界条件
    if(n <= 2){
        return n
    }
    // 定义一个数组，来存储每一步的方法数
    // const dp = new Array(n + 1).fill(0)
    const dp = Array.from({length:n + 1},() => 0) // 这里规定数组的长度为 n + 1，因为数组的下标是从 0 开始的，所以需要多定义一个元素,为了方便
    // 定义初始状态
    dp[1] = 1
    dp[2] = 2

    // 通过循环计算每一步的方法数
    for(let i = 3; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

// 测试用例
console.log(climbStairs(5))


// step2:
// 思路同上，上述是通过数组来存储每一步的值，这里优化为只使用两个变量来存储，因为题目本来就是通过前一个和后一个的值来计算的
const climbStairs2 = (n) => {
    if(n <= 2){
        return n
    }

    let prev1 = 2
    let prev2 = 1
    for(let i = 3; i <= n; i++){
        const current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    }
    return prev1
}

// 测试用例
console.log(climbStairs2(5))