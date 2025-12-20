import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addProduct, addUser } from './actions'

function App() {
  const dispatch =  useDispatch()
  // const state =  useSelector((store) => store)

  const users = useSelector((state) => state.users)
  const proudcts = useSelector((state) => state.products)


  return (
    <div className="text-rose-400">
      <button
        onClick={() => {dispatch(addUser('amir'))}}
      > 
        Add user
      </button>
      
      <button
        onClick={() => {dispatch(addProduct('labtop'))}}
      >
        Add product
      </button>

      <ul>
        {users.map((user) => (
          <li key = {user}>{user}</li>
        ) )}
      </ul>

      <ul>
        {proudcts.map((proudct) => (
          <li key = {proudct}>{proudct}</li>
        ))}
      </ul>

    </div>
  )
}

export default App

{/* <h1>User : {state.users}</h1>
<h1>product : {state.products}</h1> */}