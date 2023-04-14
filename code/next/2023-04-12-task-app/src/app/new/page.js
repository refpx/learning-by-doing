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
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Some title'
        {...register('title', { required: true })}
      />
      {errors.title && <span>This field is required</span>}

      <textarea
        placeholder='Some awesome description...'
        {...register('description', { required: true })}
      />
      {errors.description && <span>This field is required</span>}

      <button type='submit'>Save</button>
    </form>
  )
}
export default Page
