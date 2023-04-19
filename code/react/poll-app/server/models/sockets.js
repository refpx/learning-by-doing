import ItemList from './item-list.js'

class Sockets {
  constructor(io) {
    this.io = io
    this.bandList = new ItemList()
    this.socketEvents()
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      console.log('Client connected', socket.id)

      // Emit all bands when a client connects
      socket.emit('current-bands', this.bandList.getItems())
    })
  }
}

export default Sockets
