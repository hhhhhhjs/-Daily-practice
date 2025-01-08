/**
 *题目描述：
 有n个元素的数组，元素由[0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]组成；

现在想从数组中选择一段连续的区间，得到尽可能大的乘积；

输入格式
每个样例有两行；
第一行是整数n，表示数组长度；（1≤n≤10000 1≤n≤10000）
第二行是n个整数，整数取值为[0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]；

输出格式
每个样例一行，输出整数x和y，表示乘积最大的区间[x, y]；如果有多个答案，输出x尽可能小的答案；如果仍有多个答案，输出y尽可能小的答案；
 */


function findMaxProductInterval(n, arr) {
    let maxProduct = 0; // 最大乘积
    let start = 0, end = 0; // 最大乘积区间的起点和终点
    let currentProduct = 1; // 当前乘积
    let tempStart = 0; // 临时起点

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            // 遇到0时，重置乘积和临时起点
            currentProduct = 1;
            tempStart = i + 1;
            continue;
        }

        // 更新当前乘积
        currentProduct *= arr[i];

        // 如果当前乘积大于最大乘积，更新最大值和区间
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
            start = tempStart;
            end = i;
        }
        // 如果当前乘积等于最大乘积，选择起点更小、终点更小的区间
        else if (currentProduct === maxProduct) {
            if (tempStart < start || (tempStart === start && i < end)) {
                start = tempStart;
                end = i;
            }
        }
    }

    // 输出结果，转换为 1-based 索引
    return [start + 1, end + 1];
}

// 测试样例
console.log(findMaxProductInterval(5, [1, 2, 4, 0, 8])); // 输出: [1, 3]
console.log(findMaxProductInterval(7, [1, 2, 4, 8, 0, 256, 0])); // 输出: [6, 6]
console.log(findMaxProductInterval(5, [0, 0, 0, 0, 0])); // 输出: [0, 0]

/**
 * 解题思路：
 * 由于题目说数组中的每一个元素都是2的幂次方，且数组中可能存在0，因此我们可以将问题转化为求连续子数组的和最大值的问题。
 * 我们可以使用动态规划的方法来解决这个问题。
 * 首先定义最大面积，起点和终点，当前面积，临时起点，这里设置当前面积初始值为 1，方便后续计算
 * 然后开始遍历数组，如果遇到 0 那么说明一个新的区间即将开始，所以要重置当前面积和临时起点
 * 如果遇到非 0 元素，那么更新当前面积，然后判断当前面积是否大于最大面积，如果是，那么更新最大面积和起点和终点
 * 如果当前面积等于最大面积，那么选择起点更小、终点更小的区间
 * 最后输出结果
 */
