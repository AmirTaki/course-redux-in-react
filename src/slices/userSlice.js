import { createSlice } from "@reduxjs/toolkit"


const userSlices =  createSlice({
    name: 'users',
    
    initialState: [],
    
    reducers: {
        addUser: (state, action) => {
            action.payload.name ? state.push({id: Date.now(), name: action.payload.name }) : state
        },
        removeUser: (state, action) => {
            return  state.filter((item) => item.id !== action.payload.id)
        }
    }

})
export default userSlices;