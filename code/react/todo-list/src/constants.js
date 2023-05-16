import index from 'just-index'

export const Status = {
  Todo: 'TODO',
  Doing: 'DOING',
  Completed: 'COMPLETED'
}

export const statusConfigs = [
  {
    status: Status.Todo,
    label: 'Por hacer',
    color: 'error'
  },
  {
    status: Status.Doing,
    label: 'En progreso',
    color: 'warning'
  },
  {
    status: Status.Completed,
    label: 'Completado',
    color: 'success'
  }
]

export const statusConfigByStatus = index(statusConfigs, 'status')
