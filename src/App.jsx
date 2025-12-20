import { Provider } from 'react-redux'
import './App.css'
import store from './todo/store'

function App() {


  return (
    <Provider store = {store}>
      <div className="text-rose-400 ">
        
      </div>
    </Provider>
  )
}

export default App
