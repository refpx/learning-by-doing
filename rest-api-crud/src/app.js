import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// <-- import routes -->
import indexRoutes from './routes/index.routes.js'
import productsRoutes from './routes/products.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// <-- using routes -->
app.use(indexRoutes)
app.use(productsRoutes)

export default app
