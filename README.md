# websocket
websocket and socket.io implementation
Realtime Chat Application (Socket.IO + Express)

This is a small real-time chat application built with Node.js, Express, and Socket.IO.
Users can enter any room ID and chat with others who join the same room.
The project also includes a simple modern UI with message animations.

Features

Users can create or join any room by entering a room ID.

Messages appear instantly using WebSockets (Socket.IO).

Each room is isolated, so messages stay within that room only.

Basic, clean, responsive UI.

Works on both mobile and desktop.

Technologies Used

Node.js

Express.js

Socket.IO

HTML, CSS, JavaScript (frontend)

Project Structure
project-folder/
│
├── index.html        # Frontend UI and Socket.IO client code
├── server.js         # Backend server (Express + Socket.IO)
├── package.json      # Dependencies and scripts
│
└── public/           # For static files if needed (optional)

Installation

Install dependencies:

npm install express socket.io


Start the server:

node server.js


Open this URL in your browser:

http://localhost:3000

How It Works
Joining a room

The client sends the room ID to the server:

socket.emit('join-room', roomId);


The server adds the user to that room:

socket.join(roomId);

Sending a message

Client sends message + room info:

socket.emit('message', { room, msg });


Server broadcasts it only to users in that room:

socket.to(room).emit('new-message', msg);

Receiving messages

Client listens for new messages:

socket.on('new-message', (msg) => {
    addMessageToUI(msg, 'other-message');
});
