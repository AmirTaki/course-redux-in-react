export const addToDo = (text) => {
    return {type: 'ADD', payload: {text}}
}

export const removeToDo = (id) => {
    return {type : 'REMOVE', payload: {id}}
}

