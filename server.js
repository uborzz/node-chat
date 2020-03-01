const express = require('express');
const app = express()
const server = require('http').Server(app)

const config = require('./config')

const socket = require('./socket')
const bodyParser = require('body-parser');
const db = require('./db')
const router = require('./network/routes')

db(config.dbUrl)

app.use(bodyParser.json())

socket.connect(server)
router(app)

app.use('/app', express.static('public'));

// app.listen(PORT);
// console.log(`La aplicacion esta escuchando en ${PORT}`)

// cambio para el server http + wss
server.listen(config.port, function () {
    console.log(`La aplicacion esta escuchando en ${config.port}`)    
});