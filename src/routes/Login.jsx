import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { errorsFirebase } from '../utils/errorsFirebase'
import { formValidate } from '../utils/formValidate'

import FormError from '../components/FormError'
import FormInput from '../components/FormInput'
import Title from '../components/Title'
import Button from '../components/Button'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { loginUser } = useContext(UserContext)
  const { required, patternEmail, minLength } = formValidate()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'mail@mail.com',
      password: 'mail123',
    },
  })

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true)
      await loginUser(email, password)
      navigate('/')
    } catch (error) {
      const { code, message } = errorsFirebase(error.code)
      setError(code, { message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Title text='Login' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='text'
          label='Your email'
          placeholder='Ingrese email'
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
          error={errors.email}>
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type='password'
          label='Your password'
          placeholder='Ingrese password'
          {...register('password', {
            required,
            minLength,
          })}
          error={errors.password}>
          <FormError error={errors.password} />
        </FormInput>

        <Button text='Login' type='submit' loading={loading} />
      </form>
    </>
  )
}

export default Login
