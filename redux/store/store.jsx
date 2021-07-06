import {createStore, combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer } from '../reducers/productReducer'



const Reducer= combineReducers({
    productsList:productListReducer
})
const initialState = {}
const middleware = [thunk]

const store = createStore (Reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store



