const publisher = require("./publisher")
const express = require("express")
const {v4: uuid} = require("uuid")

const app = express()

app.post('/message', (req, res, next) => {
    // get query params (for now 2) and create an object from them 
    var msgName = req.query.name
    var msgDesc = req.query.desc 

    var importantMessage = {
        id: uuid(),
        name: msgName, 
        desc: msgDesc
    }

    publisher.sendSampleMsg(importantMessage)
});

app.listen(8080, () => {
    console.log('The server started listeting...'); 
});
