import { useState } from "react"
import { addToDo } from "../todo/actions"
import { useDispatch, useSelector } from "react-redux"

const ToDoAdderForm = () => {

    const [text, setText] =  useState('')
    const dispatch =  useDispatch()
    return(
        <div className=" flex w-[50vw]">
            <input 
                type="text" className="border-2 py-2 mx-3 w-full border-blue-600" 
                placeholder="type something ....."
                value = {text}
                onChange={(e) => {setText(e.target.value)}}
            />
            <button 
                className="text-blue-500"
                onClick={() => {
                    dispatch(addToDo(text));
                    setText('')
                }}    
            >Add</button>
        </div>
    )
}

export default ToDoAdderForm