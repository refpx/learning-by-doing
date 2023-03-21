/* globals describe, test */
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('Test en <App />', () => {
  test('todo: define a test', () => {
    render(<App />)
    screen.debug()
  })
})
