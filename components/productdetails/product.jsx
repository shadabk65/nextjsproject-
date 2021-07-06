import React ,  { useState , useEffect } from 'react'
import Products from './products'
import {useDispatch , useSelector} from 'react-redux'
import { listproducts } from '../../redux/actions/productaction'
import Loader from '../Loader'
import Message from '../Message'
/*export async function getStaticProps(){
    const res = await fetch(`http://127.0.0.1:8000/api/products/`)
    const products = await res.json()
    return{
        props:{products,},
    }
}*/

 const product =() => {
 const dispatch = useDispatch ()

  const NoOfProducts = useSelector(state => state.productsList)
  const {error , loading , products} = NoOfProducts

    useEffect(()=>{
        dispatch(listproducts())
    },[],)
        return (
            <div>
               {
                   loading ? <Loader />
                   :error ? <Message variant='danger'>{error}</Message>
                      :(
                        <div className="container">
                        <div className="row">
                        <h1 className="my-4">Latest Product</h1>
                         {products.map(product =>(
                         
                          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
                             <Products product={product}/>
                          </div>   
                         ))}
                     </div>
                 </div> 
                      )
               }



                
            </div>
        )
    }
export default product