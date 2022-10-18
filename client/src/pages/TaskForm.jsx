import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/TaskContext'

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks()
  const params = useParams()
  const navigate = useNavigate()
  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id)
        setTask(task)
      }
    }
    loadTask()
  }, [])

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values)
          } else {
            await createTask(values)
          }
          setTask({
            title: '',
            description: '',
          })
          navigate('/')
        }}>
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
            <h2 className='text-xl font-bold uppercase text-center'>
              {params.id ? 'Edit Task' : 'Create Task'}
            </h2>
            <div>
              <label className='block'>Title</label>
              <input
                type='text'
                name='title'
                placeholder='Write a title'
                onChange={handleChange}
                value={values.title}
                className='px-2 py-1 rounded-sm w-full'
              />
            </div>
            <div>
              <label className='block'>Description</label>
              <textarea
                name='description'
                rows='3'
                placeholder='Write a description'
                onChange={handleChange}
                value={values.description}
                className='px-2 py-1 rounded-sm w-full'
              />
            </div>
            <button
              className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'
              type='submit'
              disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm
