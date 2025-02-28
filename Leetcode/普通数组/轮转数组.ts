const rotationArr = (nums:Array<number>, k:number) => {
    // 处理特殊情况
    if (!nums.length || k === 0) {
        return nums;
    }
    
    // 对 k 取模，确保 k 在有效范围内
    k = k % nums.length;
    
    // 轮转操作
    const rotatedPart = nums.splice(nums.length - k); // 取出后 k 个元素
    nums.unshift(...rotatedPart); // 将后 k 个元素插入到数组开头
    
    return nums;
}
// 测试用例
console.log(rotationArr([1,2,3,4,5,6,7], 3))
console.log(rotationArr([-1,-100,3,99], 2))

/* 
代码解释：
主要优化为：对 k 取模的情况
原因是：数组的长度 相当于一个循环周期，如果 k 大于数组的长度
比如 [1,2,3] 轮转 4 位，相当于轮转 1 位，实现的最终效果是 和 轮转 1 位 是一样的，这样就可以保证只在有效范围内轮转，避免不必要的性能开销
如果不适用这种方法，会导致性能浪费

刚开始自己的方法没有考虑 k 可以大于数组长度，导致性能浪费，并且代码逻辑也同样有问题
**/