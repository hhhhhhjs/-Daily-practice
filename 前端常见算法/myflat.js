// 手撕 flat
function myflat(){
    let result = []
    for(let item of this){
        if(item instanceof Array){
            result = [...result, ...item]
        }else {
            result.push(item)
        }
    }
    return result
}


Array.prototype.myflat = myflat
const arr = [[1,2],[3,4],[[5,6],7]]

// console.log(arr.flat().flat())
console.log(arr.myflat())