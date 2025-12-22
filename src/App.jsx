import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import counterSlice from './counterSlice'

function App() {
  const {value} =  useSelector((state) => state)
  const dispatch =  useDispatch()
  const {increase, decrease} = counterSlice.actions
  return (
    <div className="text-rose-400">
      
      <h1>Counter value is: {value}</h1>
      
      <button
        onClick={() => {dispatch(increase())}}
      >incrase</button>
      
      <button
        onClick={() => {dispatch(decrease())}}
      >decrase</button>
    </div>
  )
}

export default App
