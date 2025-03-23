const findAnagrams = (s, p) => {
    // 结果数组
    const result = []
    const plen = p.length
    const slen = s.length
    // 判断特殊情况, 此时 s 不可能存在 p 的异位词
    if (slen < plen) {
        return result
    }
    // 声明两个数组，用来存储字符出现的频率, 因为需要考虑到所有字符的情况，所以是 26 个英文字母，将数组长度初始化为 26
    const pMap = Array(26).fill(0)
    const sMap = Array(26).fill(0)

    // 遍历 p, 统计其中每一个字符出现的频率
    for(let i = 0; i < plen; i++){
        pMap[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    // 遍历 s
    for(let i = 0; i < slen; i++){
        // 首先需要构造一个长度和 plen 相同的滑动窗口,即在每次遍历的时候将字符统计到 smap 中
        sMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        
        // 如果此时 i 大于等于 p 的长度，说明这个滑动窗口已经构造完毕，但是由于索引是从 0 开始的
        // 所以需要先将滑动窗口的第一个字符清除
        if(i >= plen){
            sMap[s.charCodeAt(i - plen) - 'a'.charCodeAt(0)]--
        }
        // 在 i >= plen - 1 的时候需要去检查 smap 和 pmap 是否相同，如果此时滑动窗口还没有构造完毕，那么去检查就没意义
        if(i >= plen - 1 && sMap.toString() === pMap.toString()){
            result.push(i - plen + 1)
        }
    }
    return result
}

const s = "cbaebabacd", p = "abc"
const s2 = "abab", p2 = "ab"

console.log(findAnagrams(s,p))
console.log(findAnagrams(s2, p2))