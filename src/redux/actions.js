
export const AddToDo = (text) => {
    return {type: 'ADD', payload: {text}}
}

export const RemoveToDo = (id) => {
    return {type: 'REMOVE', payload : {id}}
}


