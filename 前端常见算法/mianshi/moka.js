/**
* @param {{start: number, end: number}} first - 第一个区间
* @param {{start: number, end: number}} second - 第二个区间
* start end 是number 且需要考虑 小数情况
* @return {boolean} 是否有交集
*/
 
// 正向思维
function isOverlapped(first, second) {
    // TODO

    const {start:first1 , end:end1} = first
    const {start:second2, end:end2} = second
    return (first1 >= second2 && first1 <= end2) || (end1 >= second2 && end1 <= end2) || (second2 >= first1 && second2 <= end1)
    || (end2 >= first1 && end2 <= end1)
}
 

// 逆向思维，直接取补集即可
function isOverlappedReverse(first, second){
    const {start:first1, end:end1} = first
    const {start:first2, end:end2} = second
    return !((end1 < first2) || (end2 < first1))
}

// test case
const a = { start: 2.3, end: 5 };
const b = { start: 9, end: 10.5 };
const c = { start: 4, end: 6.5 };
const d = { start: 5, end: 8 };
const e = { start: 1, end: 6 };
const f = { start: 5, end: 7 };
const g = { start: 0.5, end: 3 };
 
const r1 = isOverlapped(a, b);
const r2 = isOverlapped(c, d);
const r3 = isOverlapped(d, e);
const r4 = isOverlapped(f, g);

const r5 = isOverlappedReverse(a,b)
const r6 = isOverlappedReverse(c,d)
const r7 = isOverlappedReverse(d,e)
const r8 = isOverlappedReverse(f,g)
console.log(r1, r2, r3, r4); // false true true false
console.log(r5, r6, r7, r8)

/**
* @param {Range[]} intervals - 若干个区间
* @return {Range[]} 合并后的区间
*/
 
 
function merge(interval) {
    // TODO
    interval.sort((a,b) => a.start - b.start)
    const result = [interval[0]]
    // 遍历数组
    for(let i = 1; i < interval.length; i++){
        const pre = result[result.length - 1]
        const curr = interval[i]
        if(pre.end >= curr.start){
            pre.end = Math.max(pre.end, curr.end)
        }else{
            result.push(curr)
        }
    }
    return result
}
 
 
// test case
const h = [{ start: 3, end: 5 }, { start: 9, end: 10 }, { start: 4, end: 6 }, { start: 5, end: 8 }, {start:10, end: 12}, {start: 11, end: 14}];
 
const i = [{start: 4, end: 7}, {start: 6, end: 9}, {start:1, end:3}, {start: 8, end: 10}];
const j = [{start: 4, end: 7}, {start:  9, end: 10}, {start:7, end:9}];
 
// console.log(merge(h)); // [{start: 3, end: 8}, {start: 9, end: 14}]
// console.log(merge(i)); // [{start: 1, end: 3}, {start: 4, end: 10}]
// console.log(merge(j)); // [{start: 4, end: 10}]

