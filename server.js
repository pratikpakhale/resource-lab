const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.post('/notion', async (req, res) => {
  const { endpoint, body, headers } = req.body

  try {
    const response = await axios.post(endpoint, body, {
      headers,
    })

    const { data, status } = response

    if (status !== 200) {
      throw new Error('Something went wrong')
    }
    res.status(200).json(data, status)
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error.message)
  }
})

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Hello World!' })
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
