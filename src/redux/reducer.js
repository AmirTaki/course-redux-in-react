
const initialState = {
    todos : []
}

const ReducerToDo = (state = initialState, action) => {
    switch(action.type){
        case "ADD":
            return {...state, todos: [...state.todos ,{id: new Date(), text: action.payload.text }]}

        case "REMOVE":
            return {...state, todos: [...state.todos.filter((item) => item.id !== action.payload.id)]}
        
        default: 
            return state
    }
}

export default ReducerToDo;