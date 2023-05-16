import { IconButton, ListItem, ListItemText, Chip, Box } from '@mui/material'
import { Edit as EditIcon, Close as CloseIcon } from '@mui/icons-material'
import { statusConfigByStatus } from '../constants'

export const TaskItem = ({ task, onEdit, onDelete, onClickStatus }) => {
  const statusConfig = statusConfigByStatus[task.status]

  const _handleClickEdit = () => {
    if (onEdit) onEdit(task)
  }

  const _handleClickDelete = () => {
    if (onDelete) onDelete(task._id)
  }

  const _handleClickStatus = () => {
    if (onClickStatus) onClickStatus(task._id)
  }

  return (
    <ListItem
      secondaryAction={
        <Box>
          <Chip
            label={statusConfig.label}
            sx={{ marginRight: 1 }}
            color={statusConfig.color}
            onClick={_handleClickStatus}
          />
          <IconButton size='small' color='primary' onClick={_handleClickEdit}>
            <EditIcon fontSize='small' />
          </IconButton>
          <IconButton size='small' color='secondary' onClick={_handleClickDelete}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </Box>
      }
    >
      <ListItemText primary={task.title} secondary={task.description} />
    </ListItem>
  )
}
