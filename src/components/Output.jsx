import { useState } from 'react'

import pushToNotion from '../functions/notion'

import TextBox from '../utils/TextBox'
import TextArea from '../utils/TextArea'
import Button from '../utils/Button'
import Tags from '../utils/Tags'

function Output({
  response: { url = '', description = '', tags = [], title = '' },
  setResponse,
  alertHandler: handleAlert,
}) {
  const [isLoading, setIsLoading] = useState(false)

  if (!url || !description || !tags.length) {
    return null
  } else if (url === '' || description === '' || tags.length === 0) {
    return null
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
    </div>
  )
}

export default Output
