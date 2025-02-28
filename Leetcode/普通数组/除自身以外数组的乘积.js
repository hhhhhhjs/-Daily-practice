function productExceptSelf(nums) {
   const n = nums.length;
   const answer = new Array(n).fill(1);

   // 计算前缀积
   let prefix = 1;
   for (let i = 0; i < n; i++) {
      answer[i] = prefix;
      prefix *= nums[i];
   }

   // 计算后缀积并同时计算最终结果
   let suffix = 1;
   for (let i = n - 1; i >= 0; i--) {
      answer[i] *= suffix;
      suffix *= nums[i];
   }

   return answer;
}

// 示例测试
console.log(productExceptSelf([1, 2, 3, 4])); // 输出: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // 输出: [0, 0, 9, 0, 0]

/**
 * 前缀积：从左到右遍历数组，计算每个位置左边所有元素的乘积。

后缀积：从右到左遍历数组，计算每个位置右边所有元素的乘积。

结果：将前缀积和后缀积相乘，得到最终的结果
 */