import { combineReducers } from "redux";
import { productListReducer } from './productReducer'
const reducers = combineReducers({
    productsList:productListReducer
})
export default reducers