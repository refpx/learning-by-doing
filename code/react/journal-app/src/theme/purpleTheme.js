import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#6750A4'
    },
    secondary: {
      main: '#625B71'
    },
    error: {
      main: red.A400
    }
  }
})
