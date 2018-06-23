const express = require('express');
const app = express();
const cors = require('cors');
const clients = require('./clients.json');

app.use(cors());

app.get('/', function(req, res) {
    res.send(clients)
})

app.listen(3001, console.log('listen'))