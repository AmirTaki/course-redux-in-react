import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postFetch =  createAsyncThunk(
    // name action.type
    "posts/fetchPosts",
  
    // function fetch
    () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .catch((error) => {
                throw error
            })
    } 

)

// slice project

const postSlice = createSlice({
    name: "posts",
  
    initialState: {
        posts: [],
        status: ""
    },
    
    reducers: {},

    // async
    extraReducers: (builder) => {
        // switch case
        builder
            .addCase(postFetch.pending, (state, ) => {state.status = "Loading..."} )

            .addCase(postFetch.fulfilled, (state, action) => {
                state.status = "Success...", 
                state.posts = action.payload
            })

            .addCase(postFetch.rejected, (state, ) => {  state.status = 'Failed...'})
    }
})


export default postSlice