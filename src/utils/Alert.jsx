function Alert({ title, message, type }) {
  let alertType = 'text-green-900 bg-green-200'

  if (type === 'error') {
    alertType = 'text-red-900 bg-red-200'
  }

  return (
    <div
      className={
        'absolute top-10 left-1/2 translate-x-[-50%] p-4 mb-4 text-sm rounded-lg animate-pulse ' +
        alertType
      }
      role='alert'
    >
      <span className='font-medium'>{title}</span> {message}
    </div>
  )
}

export default Alert
