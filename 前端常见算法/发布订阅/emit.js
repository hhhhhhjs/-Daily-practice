const eventbus = require('./publishSub.js')
require('./Sub.js')
const sendvalue = 'hello world'
eventbus.emit('ha', sendvalue)