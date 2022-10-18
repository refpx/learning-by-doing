import app from './src/app.js'
import { connectToDB } from './src/utils/mongoose.js'

const main = async () => {
  try {
    await connectToDB()
    app.listen(3000, () => console.log('Server on port 3000'))
  } catch (error) {
    console.log(error)
  }
}

main()
