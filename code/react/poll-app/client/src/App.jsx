import { useEffect, useState } from 'react'
import { Card, Grid, Col, Badge } from '@tremor/react'
import { StatusOnlineIcon, MinusCircleIcon } from '@heroicons/react/outline'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'
import { useSocket } from './hooks/useSocket'
import { useSocketContext } from './context/SocketContext'

function App () {
  // const [items, setItems] = useState([])
  const { status } = useSocketContext()

  // useEffect(() => {
  //   socket.on('current-items', (items) => {
  //     setItems(items)
  //   })
  // }, [socket])

  // const vote = (id) => {
  //   socket.emit('vote-item', id)
  // }

  // const deleteItem = (id) => {
  //   socket.emit('delete-item', id)
  // }

  // const onChangeItemName = (id, name) => {
  //   socket.emit('change-item-name', { id, name })
  // }

  return (
    <div className='bg-slate-50 w-screen h-screen'>
      <header className='w-10/12 mx-auto flex justify-end py-4'>
        {
          status
            ? <Badge size='xl' icon={StatusOnlineIcon} color='green'>Server Online</Badge>
            : <Badge size='xl' icon={MinusCircleIcon} color='red'>Server Offline</Badge>
        }
      </header>

      <main className='w-10/12 mx-auto'>
        <Grid numCols={3} className='gap-2'>
          <Col numColSpan={2}>
            <Card>
              {/* <ItemList /> */}
            </Card>
          </Col>
          <Card>
            {/* <ItemForm /> */}
          </Card>
        </Grid>
      </main>
    </div>
  )
}
export default App
