// 手撕 call
// 在 call 中第一个参数是 this，第二个以及后面的是参数，所以整体逻辑跟 apply 相似
function mycall(...args){ // 结构解构参数 args, 为所有参数组成的数组，如果不带上 ... 则只代表第一个参数，也就是相当于第一个形参
    // 这里第一个为 this, 后面的代表函数的参数

    // 确保 context 有值
    const context = args[0] || window
    // 剩下的参数
    const restargs = args.slice(1)
    // 声明一个唯一的变量
    const fn = Symbol()
    // 将 fn 作为 context 的一个属性, 将 this 赋值给这个属性
    context[fn] = this
    // 执行函数，并且更改其 this 指向
    context[fn](...restargs)
    // 删除上面的属性
    delete context[fn]
    return context
}

Function.prototype.mycall = mycall

// 测试用例
const obj = {
    name:'hj',
    age: 22
}
function testfn(value){
    console.log(this)
    console.log(`来封装一下${value} 吧`)
}
testfn.call(obj,'call')

// 使用自己的 call
testfn.mycall(obj,'call')
