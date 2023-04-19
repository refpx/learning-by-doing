import Item from './item.js'

class ItemList {
  constructor() {
    this.items = [
      new Item('Twenty One Pilots'),
      new Item('The Killers'),
      new Item('The Strokes'),
      new Item('Imagine Dragons'),
    ]
  }

  getItems() {
    return this.items
  }

  createItem(name) {
    const newItem = new Item(name)
    this.items.push(newItem)
  }

  deleteItem(id) {
    this.items = this.items.filter((item) => item.id !== id)
  }

  updateItemName(id, newName) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        item.name = newName
      }
      return item
    })
  }

  increaseVotes(id) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        item.votes++
      }
      return item
    })
  }
}

export default ItemList
