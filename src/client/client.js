import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from './Routes'
import reducers from './reducers/combineReducers'
import { HelmetProvider } from 'react-helmet-async';

const axiosInstance = axios.create({
  baseURL: '/api',
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

ReactDOM.hydrate(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </HelmetProvider>
  </Provider>,
  document.querySelector('#root')
)