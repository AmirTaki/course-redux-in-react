import { combineReducers, createStore } from "redux";
import userReducer from "./useReducer";
import productReudcer from "./proudctReducer";

const rootReducer = combineReducers({
    users: userReducer,
    products: productReudcer
})

const store =  createStore(rootReducer)
export default store