import styled from 'styled-components'

interface Props {
  primary?: boolean
}

export const Button = styled.button<Props>`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
  color: red;
  background-color: ${(props) => (props.primary ? 'blue' : 'green')};
`
export const Container = styled.div<Props>`
  width: 100%;
  padding: 50px;
`
