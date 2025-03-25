const majorityElement = (nums) => {
    // 声明判断值
    const dist = Math.ceil(nums.length / 2)
    // 通过 map 来统计每个元素出现的次数
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
       if(map.has(nums[i])) {
          map.set(nums[i], map.get(nums[i]) + 1)
       }else{
        map.set(nums[i], 1)
       }
    }

    
    // 遍历 map
    for(let [key, value] of map) {
        if(value >= dist) {
            return key
        } 
    }
   
}


const arr = [2,2,1,1,1,2,2]
console.log(majorityElement(arr))

