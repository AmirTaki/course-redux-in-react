import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store = {store}>
     <App />
    </Provider>
  </StrictMode>,
)


// https://www.youtube.com/watch?v=4x3ZNwf9jbc&list=PLBWTGJo8tIVjP0VY9GXNUzI49lCEDhkw0&index=19