import { useDispatch } from "react-redux"
import { removeToDo } from "../todo/actions"

export default function ToDoItem  ({todo}) {
    const dispatch =  useDispatch()
    
    return (
        <li className="flex justify-between items-center w-[50vw] text-gray-200">  
            <span className="w-full py-3">
                {todo.text}
            </span> 
            <button 
                className="text-red-700"
                onClick={() => {dispatch(removeToDo(todo.id))}}
            >
                Remove
            </button>               
        </li>
    )
}