import ButtonLoading from './ButtonLoading'

const Button = ({ text, type, color = 'blue', loading, onClick }) => {
  if (loading) return <ButtonLoading />

  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}>
      {text}
    </button>
  )
}
export default Button

// const Button = props => {
//   if (props.loading) return <ButtonLoading />

//   const color = props.color || 'blue'

//   return (
//     <button
//       {...props}
//       className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}>
//       {props.text}
//     </button>
//   )
// }
