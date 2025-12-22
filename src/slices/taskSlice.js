import { createSlice } from "@reduxjs/toolkit";

const taskSlices =  createSlice({
    name: "tasks",

    initialState: [],

    reducers: {
        addTask: (state, action) => {
            action.payload.name ?  state.push({name: action.payload.name, id: Date.now()}) : state 
        },
        removeTask: (state, action) => {
           return state.filter((item) => item.id !== action.payload.id)
        }
    } 
})

export default taskSlices