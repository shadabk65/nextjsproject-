import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constant/constants'
import axios from 'axios'
export const listproducts = () => async (dispatch) =>{
    try{
      dispatch({type:PRODUCT_LIST_REQUEST})

      const {data} = await axios.get("http://127.0.0.1:8000/api/products")

      dispatch({type:PRODUCT_LIST_SUCCESS , playload:data})


    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL, playload:error.response && error.response.data.message?
            error.response.data.message:
             error.message})

    }
}