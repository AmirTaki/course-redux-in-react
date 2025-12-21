import {  compose, createStore } from "redux";
import ReducerToDo from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store =  createStore(ReducerToDo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
export default store



// const store =  createStore(ReducerToDo,  composeEnhancers(applyMiddleware(thunk)),)
// const store =  createStore(APIReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)