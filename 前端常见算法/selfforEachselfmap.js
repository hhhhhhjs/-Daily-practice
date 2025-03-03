// foreach 构造
function selfForEach(callback) {
    for(let i = 0; i < this.length; i++ ){
        callback(this[i], i, this)
    }
}

Array.prototype.selfForEach = selfForEach


// map 
function selfmap(callback) {
    const result = []
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this))
    }
    return result
}

Array.prototype.selfmap = selfmap
const test = [1,2,3,4,5]
test.selfForEach((item, index, arr) => {
    console.log(item, index, arr)
})


const result = test.selfmap((item, index, arr) => {
    return item + 1
})
console.log(result)


