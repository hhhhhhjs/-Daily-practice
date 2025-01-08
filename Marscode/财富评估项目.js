const solution = (arr) => {
    let maxmoney = 0;
    for(let i = 0; i < arr.length; i++){
        const tempmoney = arr[i].reduce((a,b) => a + b);
        maxmoney = Math.max(maxmoney,tempmoney);
    }
    return maxmoney;
}
console.log(solution([[1,2,3],[4,5,6],[7,8,9]]));

// 计算二维数组中每一个元素的和，然后返回最大值