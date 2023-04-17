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

const transactions = [
  {
    id: '#123456',
    votes: '12'
  },
  {
    id: '#234567',
    votes: '13'
  },
  {
    id: '#345678',
    votes: '14'
  }
]

function ItemList () {
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
          {transactions.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Button size='xs' variant='primary' color='blue'>
                  +1
                </Button>
              </TableCell>
              <TableCell>
                <TextInput placeholder='' />
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
