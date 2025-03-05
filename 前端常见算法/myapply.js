// 手撕 apply 
/**
 * 首先，想一下 apply 的功能：传递两给参数，一个为 this, 然后是一个带上参数的数组
 *  并且 apply 是函数上的方法，所以需要修改 Founction 的原型
 *  this 的调用规则是在函数调用时动态确定的，而不是在定义时确定的
 *  函数中的 this 在非严格模式下指向全局或者 window ,在严格模式下指向 undefined
 */

'use strict'
function myapply(context, args) {
  // 确保 context 有值，如果不是 undefined 或者 null 使用 context, 否则指向 window
  // 利用 js 中短路的 或 的特性，如果 true 则直接返回 context，如果 false 则返回后面的 window
  context = context || window
  // 判断是否 args 是否为数组
  if(!Array.isArray(args)){
    throw new TypeError('args must be an array')
  }
  // 声明一个唯一的 key
  const fn = Symbol()
  // 将调用 apply 的函数作为 context 的一个属性
  context[fn] = this
  // 调用函数，改变 this 指向
  context[fn](...args)
  // context 中 fn 的使命已经完成，可以滚蛋了~
  delete context[fn]
  // 最后 return 对象即可
  return context
}

Function.prototype.myapply = myapply


// 测试用例
const obj = {
  name: 'hj',
  age: 22
}

function fn() {
  console.log(this)
}

fn.apply(obj)
// output : {name:'hj', age:22}
fn.myapply(obj,[])
