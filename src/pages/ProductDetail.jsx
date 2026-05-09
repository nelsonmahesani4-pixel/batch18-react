import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/User';

function ProductDetail() {
    const {title} = useParams();
    console.log("title:", title);
    const product = products.find((product) => product.title === title);
    console.log("product:", product);
  return (
    <div>

        <h1> product {product?.title}</h1>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <h1><img src={product?.image} alt={product?.title} /></h1>


    </div>
  )
}

export default ProductDetail;
