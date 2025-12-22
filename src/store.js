import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlice";
import taskSlices from "./slices/taskSlice";
import logger from "redux-logger";

const combine = combineReducers({
  users:  userSlices.reducer,
  tasks:  taskSlices.reducer
})

const store =  configureStore({
    reducer: combine,

    // middleware logger in toolkit
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store