import Band from './band.js'

class BandList {
  constructor() {
    this.bands = [
      new Band('Twenty One Pilots'),
      new Band('The Killers'),
      new Band('The Strokes'),
      new Band('Imagine Dragons'),
    ]
  }

  getBands() {
    return this.bands
  }

  createBand(name) {
    const newBand = new Band(name)
    this.bands.push(newBand)
  }

  deleteBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id)
  }

  updateBandName(id, newName) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName
      }
      return band
    })
  }

  increaseVotes(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.votes++
      }
      return band
    })
  }
}

export default BandList
