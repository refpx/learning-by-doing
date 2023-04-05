import { Grid, Typography } from '@mui/material'
import { StarOutline } from '@mui/icons-material'

export function NothingSelectedView () {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4' color='white'>
          Select something or create an entry!
        </Typography>
      </Grid>
    </Grid>
  )
}
