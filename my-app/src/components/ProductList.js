import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(""); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch ("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      
    }
    catch (error) {
      console.error("Error fetching Products:", error);
            
    }
  }; 
  fetchProducts();
}, []);

  const filteredProducts = products.filter((product) => {
    const price = product.price;
    const MinPrice = minPrice === "" || price >= parseFloat(minPrice);
    const MaxPrice = maxPrice === "" || price <= parseFloat(maxPrice);
    return MinPrice && MaxPrice;
  });

  return (
    <div className='mainDiv'>
      <h1>Products</h1>
      <div class="input-group flex-nowrap">
        <label>
          Min Price: {minPrice}
          <input type="text" class="form-control" aria-label="Username"  aria-describedby="addon-wrapping" value={minPrice} max={1000} onChange={(e) => setMinPrice(e.target.value)} placeholder="Enter minimum price"/>
        </label>
        <label>
          Max Price: {maxPrice}
          <input type="text" class="form-control" aria-label="Username"  aria-describedby="addon-wrapping" value={maxPrice} max={1000} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Enter maximum price"/>
        </label>
      </div>
      <div className='filteredProducts'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;