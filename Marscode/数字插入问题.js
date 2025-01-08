/**
 小U手中有两个数字 a 和 b。第一个数字是一个任意的正整数，而第二个数字是一个非负整数。她的任务是将第二个数字 b 插入到第一个数字 a 的某个位置，以形成一个最大的可能数字。
你需要帮助小U找到这个插入位置，输出插入后的最大结果。

测试样例
样例1：

输入：a = 76543, b = 4
输出：765443

样例2：

输入：a = 1, b = 0
输出：10

样例3：

输入：a = 44, b = 5
输出：544

样例4：

输入：
a = 666, b = 6
输出：6666
 */

function insertToMax(a, b) {
    a = a.toString();
    let maxNum = a;
    for (let i = 0; i <= a.length; i++) {
        let newNum = a.slice(0, i) + b + a.slice(i);
        if (newNum > maxNum) {
            maxNum = newNum;
        }
    }
    return parseInt(maxNum);
}

/**
 * 解题思路：
 * 直接遍历字符串，将b插入到a的每个位置，然后比较大小，找到最大值。
 */