// // 手撕 promiseall
const mypromiseall = (arr) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(arr)){
            reject(new TypeError('error'))
        }
        const result = []
        if(!arr.length){
            resolve(result)
        }

        arr.forEach((promise) => {
            // 确保每一个元素都是 promise
            Promise.resolve(promise)
            .then((res) => {
                result.push(res)
                // 所有的 promise 都成功再返回结果
                if(result.length === arr.length){
                    resolve(result)
                }
            }).catch((error) => { // 如果出错直接返回第一个错误
                reject(error)
            })
        })
    })
}


const promise1 = Promise.resolve('哈哈')
const promise2 = Promise.resolve('嘿嘿')


mypromiseall([promise1, promise2]).then((res) => {
    console.log(res)
  })

  Promise.all([1, 2]).then((res) => {
    console.log(res)
  })