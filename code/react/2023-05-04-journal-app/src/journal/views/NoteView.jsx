import { Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useEffect } from 'react'
import { setActiveNote, startSaveNote } from '../../store'

export function NoteView () {
  const dispatch = useDispatch()
  const { active: note } = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(note)
  const dateString = useMemo(() => new Date(date).toLocaleDateString(), [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote())
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
        <Button
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
      <ImageGallery />
    </Grid>
  )
}
