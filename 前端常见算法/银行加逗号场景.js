const bank = (number) => {
    const money = number.toString()
    // if(money.length <= 3 && money >=1){
    //     return money
    // }
    let result = ''
    for(let i = money.length - 1, j = 0; i >= 0; i--, j++){
        // 排除 j = 0 的情况
        // 当 3 能被 j 整除时，说明此时 i 已经遍历了四个元素，在这个元素遍历时，先加上逗号，然后再处理下面的逻辑
        if(j > 0 && j % 3 === 0){
            result = ',' + result
        }
        result = money.charAt(i) + result
    }
    return result
}


const money = 120
console.log(bank(money))

/**
 * 定义两个变量，一个用来遍历，一个用于计数是否需要加上逗号
 * 当 j = 3 时，说明是第四次遍历，因为 j 的初始值为 0 ; 所以需要先加上逗号，再将这次遍历的元素加上
 */