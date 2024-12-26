import React from 'react';
import { addToCart } from './DataBase';
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      await addToCart(product);
      alert(`${product.title} added to your cart!`);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  return (
    <div className='Products'>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <h4>Description ↓↓↓<ol>{product.description}</ol></h4>
      <p>${product.price}</p>
      <button className="btn btn-secondary" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
