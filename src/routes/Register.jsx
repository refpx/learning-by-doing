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
import ButtonLoading from '../components/ButtonLoading'

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { registerUser } = useContext(UserContext)
  const { required, patternEmail, minLength, validateEquals } = formValidate()
  const {
    register,
    setError,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'mail@mail.com',
      password: 'mail123',
      repassword: 'mail123',
    },
  })

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true)
      await registerUser(email, password)
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
      <Title text='Register' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='text'
          placeholder='Ingrese email'
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
          label='Your email'
          error={errors.email}>
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type='password'
          placeholder='Ingrese password'
          {...register('password', {
            required,
            minLength,
          })}
          label='Your password'
          error={errors.password}>
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type='password'
          placeholder='Ingrese password'
          {...register('repassword', {
            validate: validateEquals(getValues('password')),
          })}
          label='Confirm your password'
          error={errors.repassword}>
          <FormError error={errors.repassword} />
        </FormInput>

        <Button text='Register' type='submit' loading={loading} />
      </form>
    </>
  )
}

export default Register
