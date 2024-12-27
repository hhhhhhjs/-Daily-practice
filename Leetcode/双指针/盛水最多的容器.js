const maxArea = (height) => {
    // 初始化左指针
    let left = 0;
    // 初始化右指针
    let right = height.length - 1;
    // 初始化最大面积，其实就是为了存储最大面积
    let maxArea = 0;
    while(left < right){
        // 当前宽度
        const maxwidth = right - left;
        // 当前高度
        const currentHeight = Math.min(height[left],height[right]);
        // 当前面积
        const currentArea = maxwidth * currentHeight;
        // 比较新旧值，取最大值
        maxArea = Math.max(maxArea,currentArea)
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))

/**
 * 解体思路:
 * 初始思想：暴力解法：两个 for 循环，计算每一种可能性，取最大值，但是这时候可能会出现重复的值，也都一起比较，但是影响性能
 * 优化：双指针，一个从左往右，一个从右往左，比较大小，谁小谁移动，因为面积是由小的决定的，所以移动小的，因为移动大的，面积只会越来越小，所以移动小的，有可能会出现更大的面积
 */