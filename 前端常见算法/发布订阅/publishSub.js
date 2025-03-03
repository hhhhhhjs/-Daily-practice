// 手写发布订阅

class EventBus {
    constructor() {
        this.events = {} 
    }

    // 订阅事件
    on(eventName, callback) {
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }

    // 发布事件
    emit(eventName, ...args) {
        if(this.events[eventName]){
            this.events[eventName].forEach(callback => {
                callback(...args)
            })
        }
    }

    // 取消订阅
    off(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter((cb) => {
                return cb !== callback
            })
        }
        // 检查数组是否为空，如果为空，删除该事件
        if(this.events[eventName] === 0){
            delete this.events[eventName]
        }
    }
}
// 使用示例 
const eventbus = new EventBus()
module.exports = eventbus