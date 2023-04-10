import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'El password debe de ser mayor a 6 caracteres'],
  displayName: [(value) => value.length >= 6, 'El nombre debe de ser mayor a 6 caracteres']
}

export function RegisterPage () {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch()

  const {
    onInputChange, formState, isFormValid,
    displayName, email, password,
    displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return
    console.log(formState)
    dispatch(startCreatingUserWithEmailAndPassword(formState))
  }

  return (
    <AuthLayout title='Sign Up'>
      <h1> Form status: {isFormValid ? 'Válido' : 'Incorrecto'}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Full Name'
              type='text'
              placeholder='Fredy Romero'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='email@email.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='********'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                variant='contained'
                fullWidth
                type='submit'
              >
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
