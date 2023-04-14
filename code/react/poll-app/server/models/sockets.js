class Sockets {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    // On connection
    // this.io.on('connection', (socket) => {})
  }
}

export default Sockets
