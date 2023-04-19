import { Card, BarChart, Metric, Divider } from '@tremor/react'
import { useEffect, useState } from 'react'
import { useSocketContext } from '../context/SocketContext'

function ItemChart () {
  const [chartData, setChartData] = useState([])
  const { socket } = useSocketContext()

  useEffect(() => {
    socket.on('current-items', (items) => {
      setChartData(items)
    })
  }, [socket])

  return (
    <Card>
      <Metric>Items list to vote</Metric>
      <Divider />
      <BarChart
        className='mt-6'
        data={chartData}
        index='name'
        categories={['votes']}
        colors={['gray']}
        yAxisWidth={70}
        layout='vertical'
      />
    </Card>
  )
}

export default ItemChart
