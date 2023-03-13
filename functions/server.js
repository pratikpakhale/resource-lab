const express = require('express')
const axios = require('axios')
const cors = require('cors')

const serverless = require('serverless-http')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use(cors())

app.post('/notion', async (req, res) => {
  const { endpoint, body, headers } = req.body
  console.log(req.body)
  try {
    const config = {
      method: 'post',
      url: endpoint,
      headers,
      data: body,
    }

    const response = await axios(config)

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

if (process.env.NODE_ENV === 'development') {
  app.listen(8080, () => {
    console.log('Server is running on port 8080')
  })
} else {
  exports.handler = serverless(app)
}
