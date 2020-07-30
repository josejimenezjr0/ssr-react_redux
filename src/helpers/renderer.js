import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import Routes from '../client/Routes'
import { Provider } from 'react-redux'

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={ context }>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head>
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
        <link rel="stylesheet" href="main.css">
      </head>
      <body class="bg-gray-200">
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}