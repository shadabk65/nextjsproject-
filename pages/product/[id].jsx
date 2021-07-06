import { ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../../components/Rating'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const getStaticProps = async (context) => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/products/${context.params.id}`
    );
    const product = await res.json();
  
    return {
      props: {
        product,
      },
    };
  };
  export const getStaticPaths = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/products/`);
    const products = await res.json();
  
    const paths = products.map((item) => ({
      params: { id: item.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };
const Singleproduct = ({product}) => {
   /* const [product, setProducts] = useState([])
    useEffect(()=>{
        async function fetchproduct(){
        const {data} = await axios.get(`http://127.0.0.1:8000/api/products/}`)
        setProducts(data)
        }
        fetchproduct()
    },[],)*/

    
    const [qty, setQty] = useState()


  return (
    <div>
        <div className="product-button">
        <Link href='/'><a>Go Back</a></Link></div>
      <div className="container my-10">
        <div className="row ">
        
          <div className="col-md-6">
            <Image src={product.image} alt={product.name} className="server-img" width={500}
      height={400} />
          </div>
          <div className="col-md-3">
          <ListGroup variant="flush">
             <ListGroup.Item>
               <h3>{product.name}</h3>
             </ListGroup.Item>

             <ListGroup.Item>
               <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
             </ListGroup.Item>

              <ListGroup.Item>
               Price: ${product.price}
              </ListGroup.Item>

              <ListGroup.Item>
              Description: {product.discription}
              </ListGroup.Item>
              </ListGroup>                          
          </div>
          <div className="col-md-3">
             
          <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <div className="row">
                                                    <div className="col">Price:</div>
                                                    <div className="col">
                                                        <strong>${product.price}</strong>
                                                    </div>
                                                    </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row">
                                                    <div className="col">Status:</div>
                                                    <div className="col">
                                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </div>
                                                </div>
                                            </ListGroup.Item>

                                           {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <div className="row">
                                                        <div className="col">Qty</div>
                                                        <div className="col my-1 " xs='auto'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {

                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                            </div>
                                                        </div>
                                                </ListGroup.Item>
                                            )}


                                            <ListGroup.Item>
                                                <Button
                                                    className='btn-block'
                                                    disabled={product.countInStock == 0}
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>




          </div>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
