import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import apiAction from './redux/actions'

function App() {
  
  const dispatch =  useDispatch()
  const {error, data, isLoading} =  useSelector((state) => state)

  return (

    <div className="text-rose-400">
      <button
        onClick={()=> {dispatch(apiAction())}} 
        className='text-green-600'>Click to send request</button>
      <h1 className='text-blue-600'>Fetched Data: </h1>

      {isLoading && 
        <div className='text-white'>
          Loading....
        </div>
      }
    
      { error & <div className='text-red-500'>Fetch no api</div>}
    
      <ul>
        {data.map((item)=> {
          return(
            <li key = {item.id}>
              {item.title}
            </li>
          )
        })}
      </ul>

      
    </div>
  )
}

export default App
