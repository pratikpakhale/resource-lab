function TextArea({ placeholder, value, onChange, className, readOnly }) {
  return (
    <textarea
      rows='4'
      className={
        'border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mt-4 block ' +
        className
      }
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      readOnly={readOnly}
    ></textarea>
  )
}

export default TextArea
