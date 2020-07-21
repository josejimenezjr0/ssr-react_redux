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

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData && route.loadData(store)
  })

  Promise.all(promises).then(() => res.send(renderer(req, store)))

})

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))