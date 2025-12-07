const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http');
const path = require('path');

const server = http.createServer(app);
const io = new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});;

server.listen(3000,()=>{
    console.log("Listening at port 3000");
})


io.on("connection", (socket)=>{
    socket.on('message',(data)=>{
        socket.broadcast.emit('new-message', data);
    })

    socket.on('disconnect', ()=>{
        console.log("Disconnected from server");
    })
})





// //this is swebsocket 
// const server = app.listen(3000,()=>{
//     console.log("listening port at 3000");
// })


// //to build socket we have to build above the websocket 
// const io = new Server(server);