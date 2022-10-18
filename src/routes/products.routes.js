import { Router } from 'express'
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products/:id', getProduct)
router.get('/products', getProducts)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router
