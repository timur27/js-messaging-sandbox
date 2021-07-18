var amqp = require('amqplib/callback_api');

var setup = () => {
    console.log('Setting up the subscriber')
    amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0) {
        throw error0
    }

    connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1
            }

            let queue = 'foo-msgs' 

            channel.assertQueue(queue, {
                durable: false 
            })

            console.log('waiting for msgs on queue: ' + queue)
            channel.consume(queue, (msg) => { 
                console.log('consumed msg: ' + msg.content.toString())
                channel.ack(msg);
            })
        })
    })
}

module.exports = { setup }