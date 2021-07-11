var amqp = require('amqplib/callback_api');

var setupSubscriber = () => {
    console.log('here we are: ' + amqp); 
    amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0) {
        throw error0; 
    }

    connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1; 
            }

            let queue = 'foo-msgs' 

            channel.assertQueue(queue, {
                durable: false 
            });

            console.log('waiting for msgs from: ' + queue); 
            channel.consume(queue, (msg) => {
                console.log('ihaaa'); 
                console.log(msg.content.toString()); 
            })
        })
    })
}

module.exports = { setupSubscriber };