import styled from 'styled-components'

interface Props {
  height?: number
  src?: string
}

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div<Props>`
  margin-top: 50px;
  height: ${(props) => props.height}vh;
  width: 90%;
  border-radius: 10px 10px 0 0;
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 0.5;
`
