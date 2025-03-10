// 动态规划：杨辉三角
const generate = (numRows) => {
    // 判断特殊情况
    if(numRows === 0){
        return []
    }
    // 初始化杨辉三角
    const triangle = [[1]]
    // 从第二行开始遍历
    for(let i = 1; i < numRows; i++){
        // 首先初始化当前行数的数组
        const current = [1]
        // 上一行
        const prevRow = triangle[i - 1]

        // 处理中间元素,由于在第几行就存在几个元素，但是数组的索引从 0 开始
        // 这里第一元素是 1 ，从第二个元素开始处理
        for(let j = 1; j < i; j++){
            // 这个循环是用来处理中间元素的，但是第二行没有中间元素，当然不能执行
            current.push(prevRow[j - 1] + prevRow[j])
        }
        // 当前行的最后一个元素是 1
        current.push(1)
        // 将当前数组 push 进杨辉三角数组
        triangle.push(current)
    }
    return triangle
}

// 测试用例
console.log(generate(5))