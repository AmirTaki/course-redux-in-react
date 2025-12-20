import {v4 as uuidv4 } from "uuid";

const initilState = {
    todos : [],
}


const toDoReducer = (state = initilState, action) => {
    switch(action.type){

        case "ADD":
            return {...state, todos: [
                ...state.todos, 
                {
                    text: action.payload.text ,
                    id : uuidv4()
                }
            ]}

        case "REMOVE": 
            return {...state, 
                todos: [...state.todos.filter((item) => item.id !== action.payload.id )]
            }
        default : 
            return state
    }
}


export default toDoReducer