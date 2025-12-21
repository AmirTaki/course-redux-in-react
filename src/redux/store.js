import { applyMiddleware, createStore } from "redux";
import APIReducer from "./reducer";
import { thunk } from "redux-thunk";

const store =  createStore(APIReducer, applyMiddleware(thunk))
export default store