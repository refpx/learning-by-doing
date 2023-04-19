import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store'

export function JournalPage () {
  const { isSaving, active: note } = useSelector(state => state.journal)
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {
        (note)
          ? <NoteView />
          : <NothingSelectedView />
      }
      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined
          sx={{
            fontSize: 30
          }}
        />
      </IconButton>
    </JournalLayout>
  )
}
