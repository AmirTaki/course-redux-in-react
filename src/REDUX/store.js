import {createStore} from 'redux'
import counterReducer from './counterRducer'

let store = createStore (counterReducer)

export default store