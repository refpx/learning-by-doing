import mongoose from 'mongoose'

// const MONGODB_URI =
//   'mongodb+srv://refpx:refpx@cluster0.vzayf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const MONGODB_URI = 'mongodb://refpx:refpx123@localhost:27017/example'

export async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Mongodb connected')
  } catch (error) {
    console.log(error)
  }
}
