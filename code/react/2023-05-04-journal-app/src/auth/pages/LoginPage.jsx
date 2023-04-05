import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export function LoginPage () {
  return (
    <AuthLayout title='Sign in'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='email@email.com'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='********'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                Sign in
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Don't have an account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
