const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const port = 4500 || process.env.PORT;

app.use(cors());
app.get('/', (req, res) => {
    res.send("Server is Running")
})

const server = http.createServer(app);

const users = [{}];

const io = socketIO(server);

io.on("connection", (socket) => {
    console.log('New Connnection');

    socket.on('joined', ({ user }) => {
        users[socket.id] = user;
        console.log(`${user} has joined`);
        socket.broadcast.emit('userjoined', { user: 'Admin', message: `${users[socket.id]} has joined the chat` })
        socket.emit('welcome', { user: 'Admin', message: `Welcome to the chat, ${users[socket.id]}` })
    })

    socket.on('message', ({id, message}) => {
        io.emit('sendMessage', { user: users[id], message, id });
    })

    socket.on("disconnect", () => {
        socket.broadcast.emit('leave', { user: 'Admin', message: `${users[socket.id]} has left the chat` })
        console.log("User left");
    })

})

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);

})