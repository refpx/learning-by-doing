import Product from '../models/product.model.js'

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    return res.status(200).json(product)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body
    const product = new Product({ name, description, price })
    await product.save()
    return res.status(201).json(product)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, price } = req.body
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
      },
      { new: true }
    )
    return res.status(200).json(product)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    return res
      .status(200)
      .json({ product: product, message: 'Product deleted' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
