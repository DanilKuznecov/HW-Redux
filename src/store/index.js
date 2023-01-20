import { legacy_createStore } from 'redux'
import { useReducer } from './userReduser'


const store = legacy_createStore(
    useReducer
)

export default store