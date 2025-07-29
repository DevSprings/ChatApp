/**
 * ChatApp Server
 * --------------
 * This is the backend server for the ChatApp project.
 * 
 * Features:
 * - Uses Express to create an HTTP server.
 * - Uses Socket.IO for real-time, bidirectional communication.
 * - Allows CORS from any origin for development purposes.
 * - Listens for "chat" events from clients and broadcasts messages to all connected clients.
 * - Logs connection and disconnection events.
 * 
 * Usage:
 * 1. Install dependencies: npm install
 * 2. Start the server:    npm start
 * 3. The server runs on http://localhost:3001
 * 
 * Note: All messages are handled in-memory and are not persisted.
 * 
 * 
 * Date: July 2025
 */

const express = require('express')
const http = require('http')
const Server = require('socket.io').Server

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})
//emit

io.on("connection", (socket) => {
    console.log("connected")

    socket.on("chat", chat => {
        io.emit("chat", chat)
    })

    socket.on("disconnect", () => {
        console.log("disconnect")
    })

})

server.listen("3001", ()=> {
    console.log("running on 3001 port")
})