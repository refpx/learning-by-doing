import { Card, Container, Divider, Typography } from '@mui/material'
import { TaskList } from './components/TaskList'

function App () {
  return (
    <Container maxWidth='sm'>
      <Card sx={{ marginTop: 4 }}>
        <Typography variant='h2' component='h1' align='center' sx={{ py: 2 }}>Todo App</Typography>
        <Divider />
        <TaskList />
      </Card>
    </Container>
  )
}
export default App
