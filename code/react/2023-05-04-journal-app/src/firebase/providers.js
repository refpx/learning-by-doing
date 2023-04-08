import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const { user: { displayName, email, photoURL, uid } } = await signInWithPopup(FirebaseAuth, googleProvider)
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const { code, message } = error
    return {
      ok: false,
      errorCode: code,
      errorMessage: message
    }
  }
}
