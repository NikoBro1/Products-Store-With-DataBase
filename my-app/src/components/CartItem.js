import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div ClassName="CartItems">
      <img src={item.image} alt={item.title} style={{ width: "100px" }} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
    </div>
  );
};

export default CartItem;
