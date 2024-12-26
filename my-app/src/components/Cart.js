import React, { useState, useEffect } from 'react';
import { getCartProducts, clearCartProducts } from './DataBase';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const items = await getCartProducts();
        setCartProducts(items);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };
    fetchCart();
  }, []);

  const handleClearCart = async () => {
    try {
      await clearCartProducts(); 
      setCartProducts([]); 
      alert("Cart cleared!");
    } catch (error) {
      console.error("Failed to clear cart:", error);
      alert("Failed to clear cart.");
    }
  };

  const total = cartProducts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="Cart">
      <h1>Shopping Cart</h1>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartProducts.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button className="btn btn-outline-dark" onClick={handleClearCart}>Clear Cart</button>
      <button className="btn btn-outline-primary" disabled>Checkout</button>
    </div>
  );
};

export default Cart;
