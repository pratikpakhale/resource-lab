import { useState } from 'react'

import Keys from './components/Keys'
import InputData from './components/InputData'
import Output from './components/Output'
import Alert from './utils/Alert'
import Modal from './utils/Modal'

function App() {
  const [response, setResponse] = useState('')
  const [alert, setAlert] = useState({ title: '', message: '', type: '' })

  const handleAlert = (title, message, type) => {
    setAlert({ title, message, type })
    setTimeout(() => {
      setAlert({ title: '', message: '', type: '' })
    }, 3000)
  }

  return (
    <div className='px-10'>
      <Keys />
      <InputData setResponse={setResponse} />
      <Output
        response={response}
        setResponse={setResponse}
        alertHandler={handleAlert}
      />
      {alert.title && alert.message && alert.type && (
        <Alert title={alert.title} message={alert.message} type={alert.type} />
      )}
    </div>
  )
}

export default App
