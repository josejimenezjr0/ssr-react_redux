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

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData && route.loadData(store)
  })

  Promise.all(promises).then(() => res.send(renderer(req, store)))

})

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))

// app.use(
//   '/api',
//   proxy('http://react-ssr-api.herokuapp.com', {
//     proxyReqOptDecorator(opts) {
//       opts.headers['x-forwarded-host'] = 'localhost:5000'
//       return opts
//     }
//   })
// )