import { ListItem, BadgeDelta, Button, Text } from '@tremor/react'
import { useGlobalState } from '../../context/GlobalState'
import { XCircleIcon } from '@heroicons/react/outline'

export function TransactionItem ({ transaction }) {
  const { deleteTransaction } = useGlobalState()

  return (

    <ListItem>
      <div className='flex items-center'>
        <Button
          variant='light'
          icon={XCircleIcon}
          color='red'
          className='ml-1'
          onClick={() => {
            deleteTransaction(transaction.id)
          }}
        />
        <Text className='text-[#D9D9D9]'>
          {transaction.description}
        </Text>
      </div>
      <BadgeDelta deltaType={transaction.amount.toString().includes('-') ? 'moderateDecrease' : 'moderateIncrease'} size='xs'>
        $ {transaction.amount}
      </BadgeDelta>
    </ListItem>

  )
}
