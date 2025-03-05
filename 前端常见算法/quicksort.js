// 手写快速排序
// 思路: 在数组中选取一个随机数，作为基准，然后声明两块区域，比他大的放在一边，小的放在一边，递归实现
const quicksort = (nums) => {
    if(nums.length <= 1){
        return nums
    }
    const pivot = nums[0] // 以为第一个元素为基准
    const left = []
    const right = []
    const equal = [] // 存放和基准相等的元素
    // 遍历数组
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < pivot){
            left.push(nums[i])
        }
        if(nums[i] === pivot){
            equal.push(nums[i])
        }
        if(nums[i] > pivot){
            right.push(nums[i])
        }
    }


    return [...quicksort(left), ...equal, ...quicksort(right)]
}


const test = [2,3,1,9,4,5,7,22,13,10,2,1]
console.log(quicksort(test))