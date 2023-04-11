import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { SaveOutlined, UploadOutlined, DeleteOutline } from '@mui/icons-material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useEffect, useRef } from 'react'
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export function NoteView () {
  const dispatch = useDispatch()
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(note)
  const dateString = useMemo(() => new Date(date).toLocaleDateString(), [date])

  const fileInputRef = useRef()

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Note saved', messageSaved, 'success')
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return
    dispatch(startUploadingFiles(target.files))
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          ref={fileInputRef}
          type='file'
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />

        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          disabled={isSaving}
          color='primary'
          sx={{ padding: 2 }}
          onClick={onSaveNote}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Some awesome title...'
          label='Title'
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', borderRadius: 0, mb: 1 }}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          minRows={5}
          placeholder='Describe your day...'
          value={body}
          name='body'
          onChange={onInputChange}
          sx={{ border: 'none', borderRadius: 0, mb: 1 }}
        />
      </Grid>
      <Grid container justifyContent='end'>
        <Button
          onClick={onDelete}
          color='error'
          sx={{ mt: 2 }}
        >
          <DeleteOutline />
          Delete
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  )
}
