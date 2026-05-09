import React from 'react'
import { BrowserRouter  , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';    
import ProductDetail from '../pages/ProductDetail';
import Login from '../components/Login';
function Routing() {
  return (
    <div>
         
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products/:title" element={<ProductDetail/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Routing
