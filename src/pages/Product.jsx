import React from 'react'
import products from '../data/User'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';

function Product() {

  // Sare arrays ko merge karna
  const allProducts = [
    ...products.Starters,
    ...products.Mains,
    ...products.Desserts,
    ...products.Drinks,   
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>

      <Link to="/">
        <button>Go Back</button>
      </Link>

      {
        allProducts.map((product) => {
          return (
            <div key={product.name}>

              <Link to={`/products/${encodeURIComponent(product.name)}`}>

                <ProductCard product={product} />

              </Link>

            </div>
          )
        })
      }

    </div>
  )
}

export default Product