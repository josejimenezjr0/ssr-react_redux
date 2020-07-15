const express = require('express')
require('dotenv').config()
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/components/Home').default


const app = express()

app.get('/', (req, res) => { 
  const content = renderToString(<Home />)

  res.send(content)
})

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))