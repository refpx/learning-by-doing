import { collection, getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const loadNotes = async (uid = '') => {
  if (!uid) throw new Error('No uid found')

  const collectionRef = collection(FirebaseDB, `journal-app/db/${uid}/journal/notes`)
  const docs = await getDocs(collectionRef)

  const notes = []
  docs.forEach(doc => {
    notes.push({
      id: doc.id,
      ...doc.data()
    })
  })

  return notes
}
