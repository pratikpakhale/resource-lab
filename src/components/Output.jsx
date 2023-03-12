import { useState } from 'react'

import pushToNotion from '../functions/notion'

import TextBox from '../utils/TextBox'
import TextArea from '../utils/TextArea'
import Button from '../utils/Button'
import Tags from '../utils/Tags'
import Alert from '../utils/Alert'

function Output({
  response: { url = '', description = '', tags = [], title = '' },
  setResponse,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState({ title: '', message: '', type: '' })

  if (!url || !description || !tags.length) {
    return null
  } else if (url === '' || description === '' || tags.length === 0) {
    return null
  }

  const handleAlert = (title, message, type) => {
    setAlert({ title, message, type })
    setTimeout(() => {
      setAlert({ title: '', message: '', type: '' })
    }, 3000)
  }

  const submitHandler = async () => {
    setIsLoading(true)

    try {
      const res = await pushToNotion(title, tags, url, description)

      if (res) {
        setResponse({ url: '', description: '', tags: [], title: '' })
        handleAlert('Success', 'Successfully added to Notion', 'success')
      } else {
        handleAlert('Error', 'Something went wrong', 'error')
      }
    } catch (err) {
      console.log(err)
    }

    setIsLoading(false)
  }

  return (
    <div className='my-4'>
      <div className='text-xl '>Generated Response:</div>

      <TextBox
        placeholder='Title'
        value={title}
        className='w-full'
        readOnly={true}
      />
      <TextBox
        placeholder='URL'
        value={url}
        className='w-full'
        readOnly={true}
      />
      <Tags tags={tags} />
      <TextArea
        placeholder='Description'
        value={description}
        className='w-full'
        readOnly={true}
      />
      <Button
        value='Add'
        onClick={submitHandler}
        className='mt-2'
        isLoading={isLoading}
      />

      {alert.title && alert.message && alert.type && (
        <Alert title={alert.title} message={alert.message} type={alert.type} />
      )}
    </div>
  )
}

export default Output
