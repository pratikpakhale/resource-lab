function Tags({ tags }) {
  return (
    <div className='mt-4'>
      {tags.map(tag => (
        <span
          key={tag}
          className='bg-gray-100 text-gray-600 text-sm font-medium mr-2 px-2.5 py-2 rounded'
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
