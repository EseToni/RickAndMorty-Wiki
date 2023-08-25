import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/mainRoutes.jsx'
import store from './redux/store.js'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <MainRoutes/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
  ,
)
