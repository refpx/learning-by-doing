import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Card, Grid, Col, Badge } from '@tremor/react'
import { StatusOnlineIcon, MinusCircleIcon } from '@heroicons/react/outline'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

const connectSocketServer = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  })

  return socket
}

function App () {
  const [socket] = useState(connectSocketServer())
  const [status, setStatus] = useState(false)

  useEffect(() => {
    setStatus(socket.connected)
  }, [socket])

  useEffect(() => {
    socket.on('connect', () => {
      setStatus(true)
    })
  }, [socket])

  useEffect(() => {
    socket.on('disconnect', () => {
      setStatus(false)
    })
  }, [socket])

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
              <ItemList />
            </Card>
          </Col>
          <Card>
            <ItemForm />
          </Card>
        </Grid>
      </main>
    </div>
  )
}
export default App
