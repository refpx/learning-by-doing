import { Box, Toolbar } from '@mui/material'
import { Navbar, Sidebar } from '../components'

const drawerWidth = 240

export function JournalLayout ({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
