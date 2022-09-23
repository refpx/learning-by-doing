import {db} from './config'
import {collection, addDoc} from 'firebase/firestore'

interface Product {
  name: string
  description: string
  price: number
}

export const createProduct = async (product: Product) =>
  await addDoc(collection(db, "products"), product);
