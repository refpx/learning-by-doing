import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useForm } from 'react-hook-form'
import { formValidate } from '../utils/formValidate'
import Button from '../components/Button'
import Title from '../components/Title'
import FormInput from '../components/FormInput'
import FormError from '../components/FormError'

const Home = () => {
  const { data, error, loading, getData, addData, deleteData, updateData } =
    useFirestore()
  const { required, patternUrl } = formValidate()
  const [newOriginId, setNewOriginId] = useState()
  const [copy, setCopy] = useState({})

  const {
    register,
    resetField,
    setError,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    getData()
  }, [])

  if (loading.getData) return <p>Loading getData...</p>
  if (error) return <p>Error: {error.message}</p>

  const onSubmit = async ({ url }) => {
    try {
      if (newOriginId) {
        await updateData(newOriginId, url)
        setNewOriginId('')
        return
      } else {
        await addData(url)
      }
      resetField('url')
    } catch (error) {
      const { code, message } = errorsFirebase(error.code)
      setError(code, { message })
    }
  }

  const handleClickDelete = async id => {
    await deleteData(id)
  }

  const handleClickEdit = async doc => {
    setValue('url', doc.origin)
    setNewOriginId(doc.nanoid)
  }

  const handleClickCopy = async nanoid => {
    await navigator.clipboard.writeText(pathURL + nanoid)

    setCopy({ [nanoid]: true })
  }

  const pathURL = window.location.href

  return (
    <>
      <Title text='Home' />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='text'
          label='Your url'
          placeholder='https://**'
          {...register('url', {
            required,
            pattern: patternUrl,
          })}
          error={errors.url}>
          <FormError error={errors.url} />
        </FormInput>

        {newOriginId ? (
          <Button type='submit' text='EDIT URL' loading={loading.updateData} />
        ) : (
          <Button type='submit' text='ADD URL' loading={loading.addData} />
        )}
      </form>

      {data.map(doc => (
        <div
          key={doc.nanoid}
          className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {pathURL + doc.nanoid}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {doc.origin}
          </p>
          <div className='flex space-x-2'>
            <Button
              type='button'
              text='Delete'
              color='red'
              loading={loading[doc.nanoid]}
              onClick={() => handleClickDelete(doc.nanoid)}
            />
            <Button
              type='button'
              text='Edit'
              onClick={() => handleClickEdit(doc)}
            />
            <Button
              type='button'
              text={copy[doc.nanoid] ? 'Copied' : 'Copy'}
              onClick={() => handleClickCopy(doc.nanoid)}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default Home
