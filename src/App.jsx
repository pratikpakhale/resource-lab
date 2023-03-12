import { useState } from 'react'

import Keys from './components/Keys'
import InputData from './components/InputData'
import Output from './components/Output'

function App() {
  const [response, setResponse] = useState('')

  return (
    <div className='px-10'>
      <Keys />
      <InputData setResponse={setResponse} />
      <Output response={response} setResponse={setResponse} />
    </div>
  )
}

export default App
