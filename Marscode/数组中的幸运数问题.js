/**
 *在给定整数数组中，找出最大满足该条件的数：出现次数等于其数值的整数，如果不存在则返回 -1。
 */

 const solution = (arr) => {
    const map = new Map();
    const distArr = []
    for(let num of arr){
        if(map.has(num)){
            map.set(num, map.get(num) + 1);
        }
        else{
            map.set(num, 1);
        }
    }
    for(let char of map){
        if(char[0] === char[1]){
            distArr.push(char[0]);
        }
    }
    console.log(distArr);
    if(distArr.length === 0){
        return -1;
    }
    else{
        return Math.max(...distArr);
    }
 }
