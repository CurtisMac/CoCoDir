const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

//routes
app.get('/', (req, res)=> res.status(200).send({
    message: 'hi mom, this is my backend!'
  })
)

module.exports = app