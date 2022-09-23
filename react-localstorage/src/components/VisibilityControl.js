export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (
      window.confirm('Are you sure you want to delete all completed tasks?')
    ) {
      cleanTasks()
    }
  }

  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          checked={isChecked}
          onChange={e => setShowCompleted(e.target.checked)}
        />
        <label> Show Task done</label>
      </div>

      <button onClick={handleDelete} className='btn btn-danger btn-sm'>
        Clear
      </button>
    </div>
  )
}
