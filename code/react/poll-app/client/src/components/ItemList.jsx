import {
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TextInput,
  Title
} from '@tremor/react'

import { TrashIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

function ItemList ({ data, vote }) {
  const [items, setItems] = useState(data)

  useEffect(() => {
    setItems(data)
  }, [data])

  const handleChangeName = (e, id) => {
    const newName = e.target.value
    setItems((prevItems) => prevItems.map(i => {
      if (i.id === id) {
        i.name = newName
      }
      return i
    }))
  }

  const handleBlurName = (id, name) => {
    console.log(id, name)
  }

  return (
    <>
      <Flex justifyContent='start' className='space-x-2'>
        <Title>List items to vote</Title>
        <Badge color='gray'>8</Badge>
      </Flex>
      <Divider />
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
                  onClick={() => vote(item.id)}
                >
                  +1
                </Button>
              </TableCell>
              <TableCell>
                <TextInput
                  placeholder=''
                  value={item.name}
                  onChange={(e) => handleChangeName(e, item.id)}
                  onBlur={() => handleBlurName(item.id, item.name)}
                />
              </TableCell>
              <TableCell className='text-center'>{item.votes}</TableCell>
              <TableCell className='text-center'>
                <Button size='xs' variant='light' color='red'>
                  <Icon icon={TrashIcon} color='red' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
export default ItemList
