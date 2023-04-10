import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
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

export const signInWithEmailAndPassword = async ({ email, password, displayName }) => {
  try {
    const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { photoURL, uid } = res.user

    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName
    }
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message
    }
  }
}
