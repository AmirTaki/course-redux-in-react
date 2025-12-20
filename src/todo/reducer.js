import {v4 as uuidv4 } from "uuid";

const initilState = {
    todos :  JSON.parse(localStorage.getItem('todos')) || []
}


const toDoReducer = (state = initilState, action) => {
    switch(action.type){
        case "ADD":
            let addToDos = [...state.todos, {text: action.payload.text, id: uuidv4()}]
            localStorage.setItem('todos', JSON.stringify(addToDos))
            return {...state, todos: addToDos}


        case "REMOVE": 
            let updatedTodos = [...state.todos.filter((item) => item.id !== action.payload.id)]
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return {...state, todos: updatedTodos}    
        
        default : 
            return state
    }
}


export default toDoReducer