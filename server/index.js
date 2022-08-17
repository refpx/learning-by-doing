import express from 'express'
import morgan from 'morgan'
import { Server as SocketServer } from 'socket.io'
import { createServer } from 'http'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { PORT } from './config.js'

const app = express()
const server = createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
})

app.use(cors())
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(morgan('dev'))

io.on('connection', socket => {
  socket.on('message', message => {
    socket.broadcast.emit('message', {
      body: message,
      from: socket.id,
    })
  })
})

app.use(express.static(join(__dirname, '../client/dist')))

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)
