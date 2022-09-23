import { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase'
export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { email, photoURL, displayName, uid } = user
        setUser({ email, photoURL, displayName, uid })
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logoutUser = () => signOut(auth)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logoutUser,
        loginUser,
        registerUser,
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
