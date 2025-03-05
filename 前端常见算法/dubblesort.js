// 手写冒泡排序
// 冒泡排序指的是，从数组的第一个元素开始遍历，每一次都要和后面的元素进行比对，如果比他大，则交换位置
// 所以需要两层循环，一层为遍历的轮数，内层为比对的次数
const doubblesort = (nums) => {
    // 遍历的轮数
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

// 测试用例
const test = [2,5,7,1,3,9,8,10,4]
console.log(doubblesort(test))