const solution = (nums) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length - i; j++){
            if(nums[j] > nums[j + 1]){
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
}

const arr = [2,3,1,9,4,8,3,5,0]
console.log(solution(arr))

const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
console.log(map.entries())
