import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './REDUX/actions'


function App() {

  let counter =  useSelector((state) => state.counter)
  console.log(counter)

  let  dispatch =  useDispatch()
  console.log(dispatch)

  return (
    <div className="text-rose-400 ">

      <h1>Counter value is : {counter} </h1>

      <button onClick={() => {dispatch(increase())}}>increase</button>

      <button onClick={() => {dispatch(decrease())}}>decrease</button>

    </div>
  )
}

export default App
