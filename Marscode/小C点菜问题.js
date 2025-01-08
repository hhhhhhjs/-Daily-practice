/**
 * 小C来到了一家餐馆，准备点一些菜。已知该餐馆有 n 道菜，第 i 道菜的售价为 w
小C准备点一些价格相同的菜，但小C不会点单价超过 m的菜。
小C想知道，自己最多可以点多少道菜？

测试样例
样例1：

输入：m = 6, w = [2, 3, 3, 6, 6, 6, 9, 9, 23]
输出：3

样例2：

输入：m = 4, w = [1, 2, 4, 4, 4]
输出：3

样例3：

输入：m = 5, w = [5, 5, 5, 5, 6, 7, 8]
输出：4
 */

const solution = (m, w) => {
    const arr = w.filter((item) => {
        return item <= m
    }
    )
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    console.log(map)

    if (map.size == 0) {
        return 0
    } else {
        return Math.max(...map.values())
    }

}
// 解题思路，先对数组进行过滤，然后使用 map 存储过滤后的数组的每一个元素的个数，最后输出最大值即可，如果 map 为空，则返回 0

