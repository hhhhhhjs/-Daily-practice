// 防抖函数
function debounce(fn, delay){
    let timer = null // 存储计数器的 id
    return function(...args) {
        // 如果再次调用函数,需要先清除计时器
        clearTimeout(timer)
        // 如果不使用 apply 显示绑定, setTimeout 默认会绑定全局的 this,如果 setTimeout 的回调是箭头函数,那么不会出现这种情况
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

// 测试用例
const test = () => {
    console.log('开始打印')
}
const result = debounce(test, 5000)
result()
setTimeout(() => {
    result()
}, 3000);
// 如果多次调用则会重置计时器


// 节流 , 节流就是一个时间段内,不管调用了几次,能执行一次函数
function throttle(fn, delay){
    let lastTime = 0;
    return function(...args){
        const now = new Date().getTime()
        if(now - lastTime >= delay){
            lastTime = now
            fn.apply(this, args)
        }
    }
}

const test2 = () => {
    console.log('节流')
}

const result2 = throttle(test2, 5000)
result2()
setTimeout(() => {
    result2()
}, 3000);

setTimeout(() => {
    result2()
}, 4000);
// 五秒钟之内只会出现一次函数调用