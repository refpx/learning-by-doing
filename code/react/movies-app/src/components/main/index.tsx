import { Button, Container } from '../styled.components'
import { ThemeProvider } from 'styled-components'

const Main = (): JSX.Element => {
  const theme = {
    primary: true,
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button primary>Main</Button>
      </Container>
    </ThemeProvider>
  )
}
export default Main
