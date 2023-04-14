'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
      toast.success('Task updated successfully')
    } else {
      createTask(data.title, data.description)
      toast.success('Task created successfully')
    }
    router.push('/')
  })

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === parseInt(params.id))
      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex justify-center items-center h-full'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col gap-4 bg-gray-700 p-10'
      >
        <h1 className='text-2xl'>{params.id ? 'Edit task' : 'Create task'}</h1>
        <input
          type='text'
          placeholder='Some title'
          {...register('title', { required: true })}
          className='bg-gray-800 text-white py-2 px-4 w-full focus:outline-none'
        />
        {errors.title && (
          <span className='block text-red-400'>This field is required</span>
        )}

        <textarea
          placeholder='Some awesome description...'
          {...register('description', { required: true })}
          className='bg-gray-800 text-white py-2 px-4 w-full focus:outline-none'
        />
        {errors.description && (
          <span className='block text-red-400'>This field is required</span>
        )}

        <button
          type='submit'
          className='bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded-md'
        >
          Save
        </button>
      </form>
    </div>
  )
}
export default Page
