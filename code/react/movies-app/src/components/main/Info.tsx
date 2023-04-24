import { FaRegPlayCircle, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ContainerInfo, MiniAvatar, ButtonBuy } from '../styled.components'
import BlackWidow from '../../assets/black-widow.png'
import { useAppContext } from '../../context/AppContext'

const Info = () => {
  const navigate = useNavigate()
  const { state } = useAppContext()

  const goToDetails = (): void => {
    navigate('/detail/2')
  }

  return (
    <ContainerInfo height={50}>
      <section className='icon-info'>
        <FaRegPlayCircle size={25} color='red' />
      </section>
      <section className='title-info'>{state.name}</section>
      <section className='details-info'>
        <section className='list-info'>
          <div>2020</div>
          <div>Fantastic</div>
          <div>2h 14m</div>
        </section>
      </section>
      <section className='star-info'>
        <FaStar color='orange' />
        <FaStar color='orange' />
        <FaStar color='orange' />
        <FaStar color='orange' />
        <FaStar color='orange' />
      </section>
      <section className='description'>
        <div className='description-title'>Plot Sumary</div>
        <div className='description-content'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
          facilis. Ab saepe, incidunt ipsa dicta distinctio fugiat, quidem
          accusantium aliquam, iure assumenda repellendus. Deleniti vel
          similique pariatur repellendus neque quia.
        </div>
      </section>
      <section className='description'>
        <div className='description-title'>Cast</div>
        <div className='description-images'>
          {[1, 2, 3, 4].map((item) => (
            <MiniAvatar key={item} src={BlackWidow} />
          ))}
        </div>
      </section>
      <section className='button-buy'>
        <ButtonBuy onClick={goToDetails}>Buy Now</ButtonBuy>
      </section>
    </ContainerInfo>
  )
}
export default Info
