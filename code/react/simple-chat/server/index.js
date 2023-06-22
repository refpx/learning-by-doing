import express from 'express'
import http from 'http'
import { Server as SocketServer } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

io.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})