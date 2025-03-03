// 实现深拷贝
const hobbymes = {
    computer: 1,
    guitar: 2,
    sing: 3
}
const obj = {
    name: 'hj',
    age: 22,
    hobby: hobbymes
}

// 1. 使用 json
const deepcloneJson = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

const result = deepcloneJson(obj)
result.name = '哈哈'
// console.log('原对象',obj)
// console.log('新对象',result)


// 使用普通递归
const deepclonerecursion = (obj) => {
    // 进行类型检查
    if (typeof obj !== 'object') {
        return false
    }
    const result = {}
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            result[key] = obj[key]
        } else {
            result[key] = deepcloneJson(obj[key])
        }
    }
    return result
}

const recursion = deepclonerecursion(obj)
recursion.name = '嘻嘻'
// console.log('原对象', obj)
// console.log('新对象', recursion)



// 1. 使用信息隧道
const clone = structuredClone(obj)
clone.name = 'structured'
// console.log(obj)
// console.log(clone)


// MessageChannel
// postmessage 在发送消息的时候会对结构化消息进行结构化克隆，利用这一特性实现对象的深拷贝
// postmessage 中只能放结构化的数据，例如 map,array,set.object, 不能放复杂的结构，比如 dom, Error, Promise
// 这里 onmessage 是异步的，考虑封装为 promise

const messagechannel = (obj) => {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel()
        port2.onmessage = (mes) => {
            resolve(mes.data)
        }
        port1.postMessage(obj)
    })
}

messagechannel(obj).then((res) => {
    console.log(res)
})