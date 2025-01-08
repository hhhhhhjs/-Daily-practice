const solution = (str) => {
    const newStr = str.toLowerCase();
    const temObj = {
        k:0,
        u:0
    }
    for(let key of newStr){
        if(key === 'k'){
            temObj.k += 1;
        }
        if(key === 'u'){
            temObj.u += 1;
        }
    }
    const result = Math.min(temObj['k'],temObj['u']);
    if(result === 0){
        return 0
    }else{
        return result
    }
}

console.log(solution('abcdefgh'))