/**
 *小C发现了一种特殊的数字，称为类二进制数字，即仅由数字0和1组成的十进制数。
 例如，101和1100都是类二进制数字，而112和3001则不是。
 现在，小C手上有一个正整数n，他想知道最少需要多少个类二进制数字相加才能得到n。
 */


const solution = (n) => {
    let isbinary = true
    for(let key of n ){
        if(key === '0' || key === '1'){
            continue;
        }else{
            isbinary = false
            break;
        }
    }
    if(isbinary){
        return 1
    }else{
        const strArr = n.split('')
        strArr.sort((a,b) => b - a)
        return Number(strArr[0])
    }
}
console.log(solution('123456789'));
/**
 * 解题思路：
 * 1. 首先判断n是否是类二进制数字
 * 2. 如果是类二进制数字，那么就返回1
 * 3. 如果不是类二进制数字，那么就将n转换成数组，然后将数组进行排序，然后返回数组的第一个元素
 * 因为类二进制数字的特点是，只能由0和1组成，所以如果一个数字是类二进制数字，那么它的每一位都是0或者1
 * 所以直接取字符串中最大的一个数字即可
 */