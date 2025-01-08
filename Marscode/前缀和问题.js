const solution = (arr) => {
    const result = [];
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      sum += arr[i]
      result.push(sum)
    }
    return result
}
console.log(solution([4, 5, 1, 6]));
// 计算数组的前缀和
