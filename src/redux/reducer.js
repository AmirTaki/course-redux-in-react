
const initialState = {
    isLoading: false, 
    data: [],
    error: null
}

const APIReducer = (state = initialState, action) => {
    switch(action.type){
        case "REQUEST":
            return {...state, isLoading: true}

        case "SUCCESS":
            return {...state, isLoading: false, data: action.payload.data}
        
        case "FAILURE":
            return {...state, isLoading: false,  error: action.payload.error}
       
        default: 
            return state
    }
}

export default APIReducer