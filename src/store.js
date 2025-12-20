import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./useReducer";
import productReudcer from "./proudctReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
    users: userReducer,
    products: productReudcer
})

const store =  createStore(rootReducer, applyMiddleware(logger))
export default store