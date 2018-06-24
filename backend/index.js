const app = require('express')();
const clients = require('./clients.json');
const PORT = 3001;

app.get('/', function(req, res) {
    res.send(clients)
})

app.listen(PORT, console.log(`server listen on ${PORT}`))