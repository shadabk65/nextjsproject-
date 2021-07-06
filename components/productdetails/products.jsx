import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../Rating'
import Link from 'next/link'
const products = ({product}) => {
    return (
        <div>
          <Card className='my-3 p-3 rounded' >
              <Link href="/product/[id]" as={`/product/${product.id}`}><a >
                 <Card.Img src={product.image} className="card-image" /> 
             </a></Link>
             <Card.Body>
             <Link href="/product/[id]" as={`/product/${product.id}`}><a>
                 <Card.Title as="div">
                     <strong>{product.name}</strong>
                 </Card.Title> 
             </a></Link>
             <Card.Text as="div">
               <div className="my-3">
                <Rating value={product.rating} Text={`${product.numReviews}reviews`} color={"#f8e825"}/>
               </div>    
            </Card.Text> 
            <Card.Text as="h3">
               ${product.price}
            </Card.Text>
             </Card.Body>
          </Card>
        </div>
    )
}

export default products
