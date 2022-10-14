import { forwardRef } from 'react'

const FormInput = forwardRef(
  (
    { type, placeholder, onChange, onBlur, name, label, error, children },
    ref
  ) => {
    return (
      <div className='mb-6'>
        <label
          htmlFor='email'
          className={`block mb-2 text-sm font-medium ${
            error
              ? 'text-red-700 dark:text-red-500'
              : 'text-gray-900 dark:text-gray-300'
          }`}>
          {label}
        </label>
        <input
          className={`border text-sm rounded-lg block w-full p-2.5 ${
            error
              ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
              : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          }`}
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </div>
    )
  }
)
export default FormInput
;('')
