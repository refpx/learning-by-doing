import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAkSdmxFdHWDBpj3p6eQLL-RM89d0bDJXk',
  authDomain: 'ccr-auth.firebaseapp.com',
  projectId: 'ccr-auth',
  storageBucket: 'ccr-auth.appspot.com',
  messagingSenderId: '743273808494',
  appId: '1:743273808494:web:c03ae13f696b1a1f6e1c7f',
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
