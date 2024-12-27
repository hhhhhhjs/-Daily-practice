const longestConsecutive = (nums) => {
    // 创建一个集合来存储数组中的所有数字
    const numSet = new Set(nums);
    console.log(numSet)
    let longestStreak = 0;

    // 遍历集合中的每个数字
    for (const num of numSet) {
        // 如果当前数字是一个序列的起点（即它前面的数字不在集合中）
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // 继续查找连续的数字
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // 更新最长连续序列的长度
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

// 测试示例
const nums = [100, 4, 200, 1, 3, 2];
// console.log(longestConsecutive(nums)); // 输出: 4
longestConsecutive(nums) // 4


/** 
 * 1. 因为题目要求不要求数组元素在原数组中连续，所以可以先将数组去重，只要有这个元素即可
 * 2. 创建一个集合来存储数组中的所有数字, 并且声明最大连续序列长度为0，在后续的每次遍历中比较这个值，确保最后输出的是最大值
 * 3. 遍历集合中的每个数字
 * 4. 如果当前数字是一个序列的起点（即它前面的数字不在集合中）
 * 5. 继续查找连续的数字
 * 6. 更新最长连续序列的长度
 * 7. 返回最长连续序列的长度
 */