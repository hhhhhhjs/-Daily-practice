// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
const engthOfLongestSubstring = (s) => {
    // 用来存储最大的字串长度
    let maxLen = 0
    // 初始化左边界
    let left = 0
    // 声明 charmap 用来存放出现过的字符
    const charmap = new Map()
    // 开始遍历字符串，从 0 索引开始遍历，如果字符串是 a ，需要考虑这种情况，并且如果字符串都是相同的字符，那么第一个元素就没有被包含进去
    // 一般来说，滑动窗口都是从 0 开始遍历
    for(let right = 0; right < s.length; right++){
        // 如果当前字符存在于 charmap 中并且 索引大于等于 left 则说明这个元素在此滑动窗口中重复，需要更新左边界
        const currentchar = s[right]
        // 注意这里是从 map 中取出来的
        if(charmap.has(currentchar) && charmap.get(currentchar) >= left){
            // 更新左边界
            left = charmap.get(currentchar) + 1
        }
        // 存储出现过的字符，如果字符相同，则直接更新其 value 值，也就是其索引值
        charmap.set(currentchar, right)
        // 更新最大值
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}


// 测试用例
console.log(engthOfLongestSubstring('abcabcbb'))
console.log(engthOfLongestSubstring('bbbbb'))
console.log(engthOfLongestSubstring('pwwkew'))
console.log(engthOfLongestSubstring('abcad'))