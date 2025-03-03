// 实现深拷贝
const hobbymes = {
    computer:1,
    guitar:2,
    sing:3
}
const obj = {
    name:'hj',
    age:22,
    hobby:hobbymes
}

// 1. 使用 json
const deepcloneJson = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

const result = deepcloneJson(obj)
result.name = '哈哈'
console.log('原对象',obj)
console.log('新对象',result)


// 使用普通递归
const deepclonerecursion = (obj) => {
    // 进行类型检查
    if(typeof obj !== 'object'){
        return false
    }
    const result = {}
    for(let key in obj){
       if(typeof obj[key] !== 'object'){
        result[key] = obj[key]
       }else {
        result[key] = deepcloneJson(obj[key])
       }
    }
    return result
}

const recursion = deepclonerecursion(obj)
recursion.name = '嘻嘻'
console.log('原对象', obj)
console.log('新对象', recursion)