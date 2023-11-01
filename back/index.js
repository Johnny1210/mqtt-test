const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

const cors = require('cors');
app.use(cors({
    origin: '*',
}));
const axios = require('axios');
io.on('connection', (socket) => {
    socket.on('font-end-channel', (msg) => {
        console.log('message: ' + msg);
    });

});

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 100000); // Generate a random number between 0 and 99
    io.emit('randomNumber', randomNumber);
}, 1000);



server.listen(8080, () => {
    console.log('listening on *:8080');
});