
const userReducer = (state = [], action) => {
    switch(action.type){
        case "ADDUSER" : 
            return [...state, action.payload]
        default : 
            return state
    }
}
export default userReducer ;