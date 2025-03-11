// 二分查找一定是针对于已经排序好的数组
// 如果找到，返回元素的索引
const binarySearch = (arr, target) => {
    if(arr.length === 0){
        return -1
    }
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        // 获取中间元素索引
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            // 更新左边界
            left = mid + 1
        }else{
            // 更新右边界
            right = mid - 1
        }
    }
    // 如果没有这个元素，返回 -1
    return -1
}

// 测试用例
const test = [1,2,3,4,6,9]

console.log(binarySearch(test,1))