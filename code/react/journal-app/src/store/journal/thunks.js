import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './'
import { fileUpload, loadNotes } from '../../helpers'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const newDoc = doc(collection(FirebaseDB, `journal-app/db/${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())

    const { uid } = getState().auth
    const { active: note } = getState().journal

    const noteToFirestore = { ...note }
    // rome-ignore lint/performance/noDelete: <explanation>
    delete noteToFirestore.id

    const docRef = doc(FirebaseDB, `journal-app/db/${uid}/journal/notes/${note.id}`)

    await setDoc(docRef, noteToFirestore, { merge: true })

    dispatch(updateNote(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())
    // await fileUpload(files[0])

    const fileUploadPromises = []
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosUrls = await Promise.all(fileUploadPromises)

    dispatch(setPhotosToActiveNote(photosUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal

    const docRef = doc(FirebaseDB, `journal-app/db/${uid}/journal/notes/${note.id}`)

    await deleteDoc(docRef)

    dispatch(deleteNoteById(note.id))
  }
}
