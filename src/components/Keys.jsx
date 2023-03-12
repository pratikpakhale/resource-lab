import { useState } from 'react'

import useLocalStorageState from '../hooks/localStorage'

import TextBox from '../utils/TextBox'

function Keys() {
  const [openai, setOpenai] = useLocalStorageState('openai')
  const [notion, setNotion] = useLocalStorageState('notion')
  const [db, setDb] = useLocalStorageState('db')

  return (
    <div className='pb-4 border-b border-gray-300'>
      <TextBox
        placeholder='OpenAI API Key'
        value={openai}
        onChange={setOpenai}
        className='mr-4'
      />
      <TextBox
        placeholder='Notion API Key'
        value={notion}
        onChange={setNotion}
        className='mr-4'
      />
      <TextBox
        placeholder='Database ID'
        value={db}
        onChange={setDb}
        className='mr-4'
      />
    </div>
  )
}

export default Keys
