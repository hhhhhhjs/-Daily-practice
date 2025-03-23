
// 使用集合
const useSet = (nums) => {
    const set = new Set(nums)
    return Array.from(set)
}

// 使用 filter + indexof

const arrMethod = (nums) => {
    const result = nums.filter((item, index, arr) => {
        return arr.indexOf(item) === index
    })
    return result
}

// 使用 reduce
const useReduce = (nums) => {
    const result = nums.reduce((arr, item) => {
        return arr.includes(item) ? arr : [...arr, item]
    }, [])
    return result
}


// 使用 map
const useMap = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            continue
        } else {
            map.set(nums[i], 1)
        }
    }
    return Array.from(map.keys())
}

    // 测试用例
    const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

    console.log(useSet(arr))
    console.log(arrMethod(arr))
    console.log(useReduce(arr))
    console.log(useMap(arr))