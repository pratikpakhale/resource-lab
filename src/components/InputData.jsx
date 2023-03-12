import { useState } from 'react'

import openAI from '../functions/openAI'

import TextBox from '../utils/TextBox'
import TextArea from '../utils/TextArea'
import Button from '../utils/Button'

function InputData({ setResponse }) {
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = async () => {
    if (url === '' || description === '') {
      return
    }

    setIsLoading(true)

    const response = await openAI(url, description)

    console.log(response)

    setResponse(response)

    setIsLoading(false)
  }

  return (
    <div className='border-b pb-2 border-gray-300'>
      <div className='text-xl mt-4'>Input Data:</div>
      <TextBox
        placeholder='URL'
        value={url}
        onChange={setUrl}
        className='w-full'
      />
      <TextArea
        placeholder='Description'
        value={description}
        onChange={setDescription}
        className='w-full'
      />
      <Button
        value='Submit'
        onClick={submitHandler}
        className='mt-2'
        isLoading={isLoading}
      />
    </div>
  )
}

export default InputData
