function TextBox({ placeholder, value, onChange, className, readOnly }) {
  return (
    <input
      type='text'
      className={
        'border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mt-4  ' +
        className
      }
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      readOnly={readOnly}
    />
  )
}

export default TextBox
