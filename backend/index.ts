const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

//functons from user.js
const {addUser, removeUser, getUser, getUsersInRoom} = require("./users.ts");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

//socket.io instance
const io = socketio(server);

//triggers at connection ( = page opened)
io.on("connection", (socket: any) => {
    console.log("New Connection!");

    socket.on("join", ({name, room}: any, callback: any) => {

        console.log(name, room);

        const {error, user} = addUser({id: socket.id, name, room});

        //dont put brackets on this or itll stop the process ?
        if(error) return callback(error);

        //message to user who joined
        socket.emit("message", {user: "admin", text: `Hi ${user.name}, welcome to room ${user.room}`});
        //message to all other users ("broadcast")
        socket.broadcast.to(user.room).emit("message", {user: "admin", text: `${user.name}, has joined!`});


        io.to(user.room).emit("roomData", {room: user.room, users: getUsersInRoom(user.room)})
           
        //socket.join()   joins a user in a room. 
        socket.join(user.room);
    } )

    socket.on("sendMessage", (message: string, callback: any) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", {user: user.name, text: message});
        io.to(user.room).emit("roomData", {room: user.room, users: getUsersInRoom(user.room)})

        callback();
    })

    socket.on("disconnect", () => {
        console.log("User has left!")
    })
})


const router = require("./router");

app.use(router);


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server has started on ${PORT}`));
