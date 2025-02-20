function maxSubArray(nums) {
    if (nums.length === 0) return 0; // 如果数组为空，返回 0

    let maxSum = nums[0]; // 初始化最大和为第一个元素
    let currentSum = nums[0]; // 初始化当前和为第一个元素

    for (let i = 1; i < nums.length; i++) {
        // 当前和取当前元素与当前和加上当前元素的较大值
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // 更新最大和
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// 测试示例
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 输出 6
console.log(maxSubArray([1])); // 输出 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 输出 23


/**
 * 1. 首先，将最大和和当前和都初始化为数组的第一个元素
 * 2. 然后，从数组的第二个元素开始遍历
 * 3. 对于每个元素，我们计算当前和加上该元素与该元素本身的较大值，这是因为我们希望保留当前的子数组和，如果加上该元素使得当前和变得更小，那么我们就舍弃之前的子数组，从当前元素开始重新计算
 */