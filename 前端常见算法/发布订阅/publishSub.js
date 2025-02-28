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
}


// 使用示例 
const eventbus = new EventBus()
module.exports = eventbus