var amqp = require("amqplib/callback_api");

var setup = () => {
  console.log("Setting up the worker queue");
  amqp.connect("amqp://localhost", (error0, connection) => {
    if (error0) {
      throw error0;
    }

    connection.createChannel((error1, channel) => {
      if (error1) {
        throw error1;
      }

      let queue = "msgs";
      channel.prefetch(1); 
      channel.assertQueue(queue, {
        durable: false,
      });

      console.log("waiting for msgs on queue: " + queue);
      channel.consume(queue, (msg) => {
        someHeavyProcessing(msg); 
      });

      someHeavyProcessing = (msg) => {
        setTimeout(() => {
          console.log("consumed msg: " + msg.content.toString());
          channel.ack(msg);
        }, 5000);
      }
    });
  });
};


module.exports = { setup };
