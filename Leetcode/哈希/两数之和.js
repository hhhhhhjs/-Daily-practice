const twoNumbersAdd = (nums, target) => {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
    return []
}

console.log(twoNumbersAdd([2, 7, 11, 15], 9)) // [0, 1]


/** 如果直接使用数组的方法，复杂度太大；
 * 使用map，可以将复杂度降低到O(n)‘
 * map 使用场景：当需要快速频繁地查找元素时，可以使用map
 */