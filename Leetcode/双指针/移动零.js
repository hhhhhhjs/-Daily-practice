var moveZeroes = function(nums) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]))

/** 
 * 采用双指针法
 * 将非零的元素排布在前面，而是零的元素不做处理，被自动挤过去
 * 这时候应该有这样一种思想，把非零的元素看作有用的东西，零元素看作没用的东西，就是空白，所以这时候只需要操作用用的东西即可
 * 1.创建一个 left 指针，用于指向非零元素的位置，初始化为 0；表示当前第一个非 0 元素需要放在数组的第一个位置
 * 2.遍历数组 nums，使用 right 指针指向当前元素；
 * 3.当 nums[right] 非 0 时，交换 nums[left] 和 nums[right]；，并且 left 加一，用来存储下一个非 0 元素的位置
 * 4.最后输出 nums 即可
 */
