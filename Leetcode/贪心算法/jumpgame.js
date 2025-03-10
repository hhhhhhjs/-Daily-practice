// 跳跃游戏
const canJump = (nums) => {
    let maxReach = 0 // 用来记录当前遍历的元素最远能到达的位置
    for(let i = 0; i < nums.length; i++){
        // 如果当前元素的下标大于可以跳跃的最大位置，那么说明永远不可能到达，直接返回 false
        if(i > maxReach){
            return false
        }
        // 更新最大位置
        maxReach = Math.max(maxReach, i + nums[i])
        // 考虑一次直接到达终点的情况
        if(maxReach >= nums.length - 1){
            return true
        }
    }
}

// 测试用例
console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))