import {
  Button,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TextInput
} from '@tremor/react'

import { TrashIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useSocketContext } from '../context/SocketContext'

function ItemList () {
  const [items, setItems] = useState([])
  const { socket } = useSocketContext()

  useEffect(() => {
    socket.on('current-items', (items) => {
      setItems(items)
    })

    return () => socket.off('current-items')
  }, [socket])

  const handleChangeName = (event, id) => {
    const newItemName = event.target.value
    setItems(items => items.map(item => {
      if (item.id === id) item.name = newItemName
      return item
    }))
  }

  const handleBlurName = (id, name) => {
    socket.emit('change-item-name', { id, name })
  }

  const handleVote = (id) => {
    socket.emit('vote-item', id)
  }

  const handleDelete = (id) => {
    socket.emit('delete-item', id)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell />
          <TableHeaderCell>Item name</TableHeaderCell>
          <TableHeaderCell className='text-center'>Total votes</TableHeaderCell>
          <TableHeaderCell className='text-center'>Delete</TableHeaderCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Button
                size='xs'
                variant='primary'
                color='blue'
                onClick={() => handleVote(item.id)}
              >
                +1
              </Button>
            </TableCell>
            <TableCell>
              <TextInput
                placeholder=''
                value={item.name}
                onChange={(event) => handleChangeName(event, item.id)}
                onBlur={() => handleBlurName(item.id, item.name)}
              />
            </TableCell>
            <TableCell className='text-center'>{item.votes}</TableCell>
            <TableCell className='text-center'>
              <Button
                size='xs'
                variant='light'
                color='red'
                onClick={() => handleDelete(item.id)}
              >
                <Icon icon={TrashIcon} color='red' />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export default ItemList
