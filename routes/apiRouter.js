const express = require('express')
const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
  res.send('this is the api!')
})

module.exports = apiRouter