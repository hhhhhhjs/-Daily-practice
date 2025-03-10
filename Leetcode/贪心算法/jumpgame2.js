// 跳跃游戏II
const jump = (nums) => {
    let maxReach = 0 // 用来记录当前遍历的元素最远能到达的位置
    let end = 0; // 用来记录当前跳跃的边界
    let steps = 0; // 用来记录跳跃的次数
    // 数组的最后一个元素不需要遍历，因为它已经是终点了
    for(let i = 0; i < nums.length - 1; i++){
        // 跟新最大能到达的位置
        maxReach = Math.max(maxReach, i + nums[i])
        // 如果当前元素的下标等于跳跃的边界，那么就需要跳跃了
        if(i === end){
            end = maxReach; // 更新跳跃的边界
            steps++; // 跳跃次数加一
        }
    }
    return steps
}

// 测试用例
console.log(jump([2,3,1,1,4]))