const groupAnagrams = (strs) => {
    let map = new Map();
    for (let str of strs) {
        // 将字符串排序后作为key
        let sortedStr = str.split('').sort().join('');
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    // 返回Map中所有的值，即分组后的结果
    return Array.from(map.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/** 如果是通过 unicode 值来判断是否相等也可以，但是比较繁琐，因为需要两次遍历
 * 1.遍历数组
 * 2.遍历字符串，累加取到最终的 unicode 值
 * 3.比较两个字符串的 unicode 值是否相等
 * 
 * 但是通过排序的方式可以简化这个过程，并且复杂度降低
 */