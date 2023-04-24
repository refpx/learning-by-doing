import { Flex } from '../styled.components'
import Info from './Info'
import Carousel from './Carousel'

const Main = (): JSX.Element => {
  return (
    <Flex>
      <Carousel />
      <Info />
    </Flex>
  )
}
export default Main
