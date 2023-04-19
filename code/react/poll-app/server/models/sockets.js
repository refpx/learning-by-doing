import ItemList from './item-list.js'

class Sockets {
  constructor(io) {
    this.io = io
    this.itemList = new ItemList()
    this.socketEvents()
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      console.log('Client connected', socket.id)

      // Emit all items when a client connects
      socket.emit('current-items', this.itemList.getItems())

      // Listen to vote-item to increase votes
      socket.on('vote-item', (id) => {
        this.itemList.increaseVotes(id)
        this.io.emit('current-items', this.itemList.getItems())
      })
    })
  }
}

export default Sockets
