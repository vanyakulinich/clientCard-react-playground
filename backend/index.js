const app = require('express')();
const cors = require('cors');
const clients = require('./clients.json');
const PORT = 3001;

app.use(cors());

app.get('/', function(req, res) {
    res.send(clients)
})

app.listen(PORT, console.log(`server listen on ${PORT}`))