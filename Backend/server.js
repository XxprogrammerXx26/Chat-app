const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);




io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    socket.on('message', (msg)=> {
    io.emit('message', msg);      

});



socket.on('disconnect', () => {  //Desconexion 
   console.log('Un usuario se ha desconectado');
});
});



server.listen(300, () =>{
    console.log('Servidor escuchando en http://localhost:3000');


});