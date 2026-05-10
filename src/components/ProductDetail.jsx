import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/User';

function ProductDetail() {

  const { title } = useParams(); 

  // URL decode karna
  const decodedTitle = decodeURIComponent(title);

  // Sare products ko merge karna
  const allProducts = [
    ...products.Starters,
    ...products.Mains,
    ...products.Desserts,
    ...products.Drinks,
  ];

  // Matching product find karna
  const product = allProducts.find(
    (item) => item.name === decodedTitle
  );

  console.log("Decoded Title: ", decodedTitle);

  return (
    <div>
<img src={product?.image} alt={product?.name} style={{ width: "300px", height: "200px", objectFit: "cover" }} />

      <h1>{product?.name}</h1>

      <h2>{product?.emoji}</h2>

      <p>Origin: {product?.origin}</p>

      <p>Price: {product?.price}</p>

      <p>Calories: {product?.cal}</p>
      
    </div>
  )
}

export default ProductDetail;