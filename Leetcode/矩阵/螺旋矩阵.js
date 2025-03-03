/**
 * 题目描述：
 * 给定一个矩阵，输出以顺时针方向输出的值，返回结果数组
 */



const spiralOrder = (matrix) => {
    // 首先进行异常数组检查
    if(!matrix.length){
        return []
    }
    // 声明结果数组
    const result = []
    // 定义初始化上下左右边界
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1

    while(right >= left && bottom >= top){
        // 从左到右遍历上边界
        for(let i = left; i <= right; i++){
            result.push(matrix[top][i])
        }
        top++
        // 这里进行判断如果数组只有一行的情况
        if(top > bottom){
            break
        }
        // 从上到下遍历右边界
        for(let i = top; i <= bottom; i++){
            result.push(matrix[i][right])
        }
        right--
        // 判断数组只有一列的情况
        if(left > right){
            break
        }
        // 从右到左遍历下边界
        for(let i = right; i >= left; i--){
            result.push(matrix[bottom][i])
        }
        bottom--
        // 从下到上遍历左边界
        for(let i = bottom; i >= top; i--){
            result.push(matrix[i][left])
        }
        left++
    }
    return result
}


// 测试用例
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))





