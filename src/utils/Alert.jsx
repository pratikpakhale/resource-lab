function Alert({ title, message, type }) {
  let alertType = 'text-green-800 bg-green-50'

  if (type === 'error') {
    alertType = 'text-red-800 bg-red-50'
  }

  return (
    <div
      className={
        ' absolute bottom-10 right-auto p-4 mb-4 text-sm rounded-lg ' +
        alertType
      }
      role='alert'
    >
      <span className='font-medium'>{title}</span> {message}
    </div>
  )
}

export default Alert
