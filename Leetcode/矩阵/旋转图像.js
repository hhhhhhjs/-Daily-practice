// 题目描述：将一个 n x n d 的矩阵顺时针旋转 90 度，原地修改数组，返回旋转后的结果

/**
 * 解题思路：
 * 1. 通过观察发现，旋转前的矩阵的第 i 行，是旋转后的第 n-1-i 列,所以第一步先将数组的行和列互换，以对角线为分界线，只转换对角线一侧
 * 否则会将数组恢复原状
 * 2. 将转换后的矩阵的行反转即可
 */

const rotate = (matrix) => {
    const n = matrix.length;
    
    // 将矩阵的行和列互换
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    // 将数组的每一行反转
    for(let i = 0; i < n; i++){
        matrix[i].reverse()
    }
    return matrix
}


// 测试用例
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(matrix))