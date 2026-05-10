import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedDishes from "../components/FeaturedDishes";
import MenuSection from "../components/MenuSection";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/global.css";
// import ProductCard from "../components/ProductCard";
// import ProductDetail from "./ProductDetail";
 

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div>
       <Navbar />
       <Hero />
       <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}/>
      <FeaturedDishes activeCategory={activeCategory} />
      <MenuSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
