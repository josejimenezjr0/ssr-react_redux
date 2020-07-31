import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import Routes from '../client/Routes'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {}

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={req.path} context={ context }>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </HelmetProvider>
    </Provider>
  )

  const { helmet } = helmetContext

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
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