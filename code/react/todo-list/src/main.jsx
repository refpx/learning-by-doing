import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './main.css'
import { CssBaseline } from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#D6C167',
      light: '#decd85',
      dark: '#958748',
      contrastText: 'rgba(0,0,0,0.87)'
    },
    secondary: {
      main: '#D95E32',
      light: '#e07e5b',
      dark: '#974123',
      contrastText: '#ffffff'
    },
    background: {
      default: '#222326',
      paper: '#3A3B40'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
      hint: 'rgba(255,255,255,0.5)'
    },
    divider: 'rgba(255,255,255,0.12)'
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
