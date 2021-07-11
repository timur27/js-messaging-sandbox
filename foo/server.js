const publisher = require("./publisher")
const express = require("express")

const app = express(); 
const port = 8080; 

app.listen(port, () => console.log('Server started and is listening on: ' + port)); 
publisher.sendSampleMsg(); 