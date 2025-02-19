const mergeIntervals = (intervals) => {
    if (intervals.length === 0) return [];

    // 首先按每个区间的起始值进行排序
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = result[result.length - 1];

        // 如果当前区间与最后一个合并的区间有重叠
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // 合并区间
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // 否则直接添加到结果中
            result.push(currentInterval);
        }
    }

    return result;
};

// 测试数组
const intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(mergeIntervals(intervals)); // 输出: [[1, 5]]



