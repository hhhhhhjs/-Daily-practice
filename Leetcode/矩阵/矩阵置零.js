/**
 * 题目描述：
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 * 
 * 解题思路：
 * 1. 首先需要数组的 行 和 列 信息
 * 2. 然后遍历数组，找到 0 元素的 行 和 列
 * 3. 最后将 0 元素的 行 和 列 对应的元素都设置为 0
 */

// 题目要求使用 原地算法 ，也就是直接修改 入参，不返回新的数组
const setZeroes = (matrix) => {
    // 进行错误处理
    if (!matrix.length) {
        return false
    }
    // 用来记录矩阵的行数和列数
    const m = matrix.length;
    const n = matrix[0].length;

    // 用来存储行，列信息
    const rowsmes = Array.from({ length: m }, () => false)
    const colmes = Array.from({ length: n }, () => false)

    // 遍历数组，找出元素为 0 的行和列信息
    matrix.forEach((item, indexA) => {
        item.forEach((child, indexB) => {
            if (child === 0) {
                rowsmes[indexA] = true
                colmes[indexB] = true
            }
        })
    })


    // 再次遍历将刚刚的行和列的元素全部置零
    matrix.forEach((item, indexA) => {
        item.forEach((child, indexB) => {
            if (rowsmes[indexA] || colmes[indexB]) {
                matrix[indexA][indexB] = 0
            }
        })
    })
}

/**
 * 性能差异:
 * 如果使用 forEach 来遍历数组，会产生额外必要的开销，因为 forEach 接收一个回调函数作为参数；
 * 每次函数调用都会产生一定的开销(创建新的执行上下文，参数传递等)
 * 
 * 所以现在直接使用 for 循环遍历即可，因为 for 循环直接操作数组索引，并且现在需要的仅仅是数组的索引，所以使用 for 循环
 */

const setZeroes2 = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;

    // 用于标记需要置零的行和列
    const rowsToZero = new Array(m).fill(false);
    const colsToZero = new Array(n).fill(false);

    // 第一次遍历，标记需要置零的行和列
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowsToZero[i] = true;
                colsToZero[j] = true;
            }
        }
    }

    // 第二次遍历，根据标记置零
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rowsToZero[i] || colsToZero[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}


// 测试用例
const test1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
const test2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]

setZeroes(test1)
setZeroes(test2)
console.log(test1)
console.log(test2)

