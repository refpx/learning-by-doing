import { ListItem, BadgeDelta, Button, Icon, Text } from '@tremor/react'
import { useGlobalState } from '../../context/GlobalState'
import { XCircleIcon } from '@heroicons/react/outline'

export function TransactionItem ({ transaction }) {
  const { deleteTransaction } = useGlobalState()

  return (

    <ListItem>
      <div className='flex items-center'>
        <Button
          variant='light'
          onClick={() => {
            deleteTransaction(transaction.id)
          }}
        >
          <Icon
            size='sm'
            icon={XCircleIcon}
            color='red'
            tooltip='Delete transaction'
          />
        </Button>
        <Text className='text-[#D9D9D9]'>
          {transaction.description}
        </Text>
      </div>
      <BadgeDelta deltaType={transaction.amount.toString().includes('-') ? 'moderateDecrease' : 'moderateIncrease'} size='xs'>
        $. {transaction.amount}
      </BadgeDelta>
    </ListItem>

  )
}
