import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export function RegisterPage () {
  return (
    <AuthLayout title='Sign Up'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Full Name'
              type='text'
              placeholder='Fredy Romero'
              fullWidth
            />
          </Grid>
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
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Sign up
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
