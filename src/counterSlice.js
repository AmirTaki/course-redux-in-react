import { createSlice } from "@reduxjs/toolkit"

//  file reducer
let initialState = {
    value: 0
}

//  slice
let counterSlice = createSlice({
    // name state
    name: "counter",
  
    // initialState
    initialState,
  
    // reducer => action ==> file action
    reducers : {
        increase:  (state) => {state.value += 1},

        decrease: (state) => {state.value -= 1}
    },
    
})

export default counterSlice