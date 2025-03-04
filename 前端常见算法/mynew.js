// 手撕 new
/**
 * 首先要明白 new 的过程
 *  如果想要明白 new 的过程，必须先知道 new 的功能是什么？
 *  new 完毕之后，会返回一个新的对象，并且这个对象可以使用构造函数来赋值，以及使用构造函数上的原型方法
 *  构造思路：
 *  1. 首先，需要先创建一个新的对象，并且将对象的 proto 属性指向，构造函数的原型对象
 *  2. 其次，由于要给新的对象赋值携带的属性，所以需要改变 this 指向，将 constructor 的 this 显式地绑定到新建的对象上
 *  3. 最后需要符合 构造函数 return 的规则，如果 构造函数显式 return 了一个对象，则返回这个对象，
 *     如果返回值是原始值，如 number,boolean, string 等，new 会忽略返回值，还是返回新建的对象
 */


// new 操作符验证
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getmessage() {
        return {
            name: this.name,
            age: this.age
        }
    }
}

const person = new Person('hj', 22)
console.log(person)


// 手写 new
function mynew(Constructor, ...args) {

    if (Function.prototype.toString.call(Constructor).startsWith('class')) {
        return new Constructor(...args); // 直接用 new 处理 class
      }
    // 新建一个对象，并且将其 proto 属性指向 构造函数的原型对象
    const obj = Object.create(Constructor.prototype)
    // 改变构造函数的 this 指向
    const result = Constructor.apply(obj, args)
    // 判断是 result 是否是对象
    return typeof result === 'object' && result !== null ? result : obj
}


const person2 = mynew(Person, '小黄', 23)
console.log(person2)