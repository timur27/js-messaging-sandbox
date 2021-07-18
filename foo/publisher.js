var amqp = require("amqplib/callback_api");

var sendSampleMsg = (msg) => {
  console.log("here we are: " + amqp);
  amqp.connect("amqp://localhost", (error0, connection) => {
    if (error0) {
      throw error0;
    }

    connection.createChannel((error1, channel) => {
      if (error1) {
        throw error1;
      }

      let queue = "foo-msgs";

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
      console.log(" [x] sent %s", msg);
    });
  });
};

module.exports = { sendSampleMsg };
