const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

// Serve static files if you add CSS/Images later, 
// but for now we serve the index.html
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);

    socket.on('join-room', (room) => {
        socket.join(room);
        console.log(`User joined room: ${room}`);
    });

    socket.on('message', ({ room, msg }) => {
        // Broadcast to everyone in the room except the sender
        socket.to(room).emit('new-message', msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});