// 获取 url query
const getquery = (url) => {
    const distStr = url.split('?')[1]
    const result = {}
    const tempArr = distStr.split('&')
    tempArr.forEach((item, index, self) => {
        const key = item.split('=')[0]
        const value = item.split('=')[1]
        result[key] = value
    })
    return result
}


// 测试用例
const url = 'https://www.example.com/search?query=laptop&category=electronics&page=2'

console.log(getquery(url))

