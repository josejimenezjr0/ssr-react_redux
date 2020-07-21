import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'


const app = express()

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore()

  // matchRoutes(Routes, req.path)
  console.log('matchRoutes(Routes, req.path): ', matchRoutes(Routes, req.path));

  res.send(renderer(req, store))
})

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))