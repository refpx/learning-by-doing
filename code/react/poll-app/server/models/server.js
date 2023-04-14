import express from 'express'
import http from 'http'
import { Server as socketio } from 'socket.io'
import path from 'path'
import cors from 'cors'

import Sockets from './sockets.js'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // Http server
    this.server = http.createServer(this.app)

    // Configuraciones de sockets
    this.io = new socketio(this.server, {})
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(
      express.static(
        path.resolve(
          path.dirname(new URL(import.meta.url).pathname),
          '../public'
        )
      )
    )

    // CORS
    this.app.use(cors())
  }

  configurarSockets() {
    new Sockets(this.io)
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares()

    // Inicializar sockets
    this.configurarSockets()

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server listening on port', this.port)
    })
  }
}

export default Server
