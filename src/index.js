import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import './client/styles/style.css'


const app = express()

app.use('/api', proxy('http://localhost:3000'))

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => route.loadData && route.loadData(store))
    .map(promise => promise && new Promise((resolve, reject) => {
      promise.then(resolve).catch(resolve)
    }))

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if(context.url) return res.redirect(context.url)

    context.notFound && res.status(404)

    res.send(content)
  })
})

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))