console.log('script start')


// setTimeout 不能作为精确的定时器 ，如果有好几个setTimeout还要执行时机
// 按照队列的顺序检查并执行
setTimeout(function(){
    console.log('setTimeout')   //定时器设置的时间代表在任务队列中检查的先后顺序
},5000)

Promise.resolve()
    .then(function(){
        console.log('promise')
        setTimeout(function(){
            console.log('我是第二个宏任务')
        },2000)
    })
    .then(function(){
        console.log('promise2')
    })

    console.log('script end')
    /**
     * output:
     * script start
     * script end
     * promise
     * promise2
     * setTimeout
     * 我是第二个宏任务
     */