import { Box, Button, CardContent, Dialog, DialogTitle, List } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { TaskItem } from './TaskItem'
import { TaskForm } from './TaskForm'
import { useState } from 'react'
import { Status, statusConfigs } from '../constants'

const defaultTasks = [
  {
    _id: crypto.randomUUID(),
    title: 'Task 1',
    status: Status.Todo,
    description: 'Description 1'
  },
  {
    _id: crypto.randomUUID(),
    title: 'Task 2',
    status: Status.Doing,
    description: 'Description 2'
  },
  {
    _id: crypto.randomUUID(),
    title: 'Task 3',
    status: Status.Completed,
    description: 'Description 3'
  }
]

export const TaskList = () => {
  const [tasks, setTasks] = useState(defaultTasks)
  const [taskSelected, setTaskSelected] = useState()
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const _handleCloseDialog = () => {
    setIsOpenDialog(false)

    setTimeout(() => {
      setTaskSelected(null)
    }, 200)
  }
  const _handleClickOpenDialog = () => setIsOpenDialog(true)

  const _handleCreateTask = (newTask) => {
    setTasks(prev => [
      ...prev,
      {
        ...newTask,
        _id: crypto.randomUUID(),
        status: Status.Todo
      }
    ])
  }

  const _handleClickEditTaskItem = (task) => {
    setTaskSelected(task)
    setIsOpenDialog(true)
  }

  const _handleclickDeleted = (taskId) => {
    setTasks(prev => prev.filter((task) => task._id !== taskId))
  }

  const _handleUpdateTask = (inputTask) => {
    setTasks(prev => prev.map((task) => {
      if (task._id !== inputTask._id) return task

      return {
        ...task,
        ...inputTask
      }
    }))
  }

  const _handleClickNextStatus = (taskId) => {
    setTasks(prev => prev.map((task) => {
      if (task._id !== taskId) return task

      const index = statusConfigs.findIndex((statusConfig) => statusConfig.status === task.status)

      const nextStatus = statusConfigs[index + 1]

      if (!nextStatus) return task

      return {
        ...task,
        status: nextStatus.status
      }
    }))
  }

  return (
    <CardContent>
      <Box display='flex' justifyContent='flex-end'>
        <Button
          variant='contained'
          color='primary'
          sx={{ mr: 2 }}
          startIcon={<AddIcon />}
          onClick={_handleClickOpenDialog}
        >Add Task
        </Button>
      </Box>
      <List>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={_handleClickEditTaskItem}
            onDelete={_handleclickDeleted}
            onClickStatus={_handleClickNextStatus}
          />
        ))}
      </List>

      <Dialog
        open={isOpenDialog}
        onClose={_handleCloseDialog}
      >
        <TaskForm
          task={taskSelected}
          onClose={_handleCloseDialog}
          onUpdate={_handleUpdateTask}
          onCreate={_handleCreateTask}
        />
      </Dialog>
    </CardContent>
  )
}
