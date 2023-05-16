import { Box, Button, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'

export const TaskForm = ({ task, onClose, onCreate, onUpdate }) => {
  const [state, setState] = useState({
    title: task?.title ?? '',
    description: task?.description ?? ''
  })

  const _handleChange = ({ target: { value, name } }) => {
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const _handleSubmit = (e) => {
    e.preventDefault()

    if (!state.title || !state.description) return

    if (task) {
      onUpdate?.({ ...task, ...state })
    } else {
      onCreate?.(state)
    }

    onClose?.()
  }

  return (
    <>
      <DialogTitle>{task?.title ? 'Actualizar tarea' : 'Nueva Tarea'}</DialogTitle>
      <DialogContent>
        <form onSubmit={_handleSubmit}>
          <TextField
            autoFocus
            name='title'
            margin='dense'
            id='title'
            label='Task title'
            fullWidth
            onChange={_handleChange}
            value={state.title}
            variant='standard'
          />
          <TextField
            name='description'
            margin='dense'
            id='description'
            label='Task description'
            fullWidth
            onChange={_handleChange}
            value={state.description}
            variant='standard'
          />
          <Box width='100%' textAlign='center'>
            <Button type='submit' sx={{ mt: 2 }}>Guardar</Button>
          </Box>
        </form>
      </DialogContent>
    </>
  )
}
