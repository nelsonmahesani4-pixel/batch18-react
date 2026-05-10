import React from 'react'
import { HashRouter  , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';    
import ProductDetail from '../components/ProductDetail';
import Login from '../components/Login';
import Product from '../pages/Product';
function Routing() {
  return (
    <div>
         
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>} />
        <Route path="/products/:title" element={<ProductDetail />} />
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </HashRouter>


    </div>
  )
}

export default Routing
