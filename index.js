const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http');

const server = http.createServer(app);
const io = new Server(server);

server.listen(3000,()=>{
    console.log("Listening");
})


io.on("connection", (socket)=>{
    socket.on('message',(data)=>{
        io.emit('new- message', data);
    })

    socket.on('Disconnect', ()=>{
        console.log("Disconnected from server");
    })
})





// //this is swebsocket 
// const server = app.listen(3000,()=>{
//     console.log("listening port at 3000");
// })


// //to build socket we have to build above the websocket 
// const io = new Server(server);