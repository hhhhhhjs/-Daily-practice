const rotationArr = (nums:Array<number>, k:number) => {
    // 首先判断数组是否为空
    if(!nums.length || k > nums.length){
        return nums
    }
    // 创建一个长度为 nums.length 的空数组, 且元素都为 0
    const result = Array.from({length:nums.length}, () => 0)
    nums.forEach((item, index, self) => {
        // 判断当前元素的索引 + k 是否大于数组的长度
        if(index + k > nums.length - 1){
            // 大于数组的长度, 则需要减去数组的长度
            result[index + k - nums.length] = item 
        } else {
            // 如果小于数组的长度，直接将元素赋值到数组相应的位置
            result[index + k] = item
        }
    })
    return result
}
// 测试用例
console.log(rotationArr([1,2,3,4,5,6,7], 3))
console.log(rotationArr([-1,-100,3,99], 2))