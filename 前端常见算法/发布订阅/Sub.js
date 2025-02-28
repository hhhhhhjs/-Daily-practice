const eventbus = require('./publishSub.js')

eventbus.on('ha', (value) => {
    console.log('接收到的值是：', value)
})
