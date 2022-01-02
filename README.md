## What is the aim of the project? 
### Sandbox project to learn the concepts of RabbitMQ message broker.

--- 
## Running prettier during pre-commit hook 
The project has currently two modules with separate package.json files in each of them. And `husky` is configured in both of them. 
* Make sure you've installed node_modules
* When committing new files, `prettier --write` will be executed in both modules
---
## Worker queues
In order to start consuming messages as more than one worker queue, one should run

`node consumer/consumer.js`

If not provided, the port used is `8080`. Thus, in case more than 1 worker queue is about to set up, the command should look like

`PORT=X node consumer/consumer.js`

Where `X` is a port number the user wants to use. 

## Sending messages from the producer 
Sample request: `curl --location --request POST 'http://localhost:8080/message?name=dev&desc=testing`

## Assumptions
The assumption is, that the processing of the consumed message by the worker takes 2 seconds. This way, one can easily see the advantages by running more than 1 worker queue in parallel.  