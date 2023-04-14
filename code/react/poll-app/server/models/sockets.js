import BandList from './band-list.js'

class Sockets {
  constructor(io) {
    this.io = io
    this.bandList = new BandList()
    this.socketEvents()
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      console.log('Client connected', socket.id)

      // Emit all bands when a client connects
      socket.emit('current-bands', this.bandList.getBands())
    })
  }
}

export default Sockets
