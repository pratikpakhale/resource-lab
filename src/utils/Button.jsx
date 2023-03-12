import Loader from './Loader'

function Button({ value, onClick, className, isLoading = false }) {
  return (
    <button
      type='button'
      className={
        `first-letter:text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 ` +
        className
      }
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : value}
    </button>
  )
}

export default Button
