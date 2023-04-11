import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'auth',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
    // active: {
    //   id: '123',
    //   title: 'Hola',
    //   body: 'Mundo',
    //   date: 123456789,
    //   imageUrls: []
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note)
    },
    deleteNoteById: (state, action) => {}
  }
})

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote
} = journalSlice.actions
