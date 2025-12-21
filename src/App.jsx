import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddToDo, RemoveToDo } from './redux/actions'

function App() {
  
  const {todos} = useSelector((state) => state)
  const [text, setText] = useState('')
  const dispatch =useDispatch()
  return (
    
    <div className="text-rose-400">
      <input type="text"  value = {text} className='border-2 border-green-500 px-3 py-2'
        onChange={(e) => {setText(e.target.value)}}
      />
      <button
        onClick={() => {dispatch(AddToDo(text)); setText('')}}
      >ADD</button>

      <ul>
        {todos.map((todo)=> (
          <li key = {todo.id} className='flex'>
            <p>{todo.text}</p>
            <button onClick={() => {dispatch(RemoveToDo(todo.id))}}>REMOVE</button>
          </li>

        ))}
      </ul>
      
    </div>
  )
}

export default App
