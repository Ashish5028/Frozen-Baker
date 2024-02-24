import { useState } from "react";

const CartItems = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("users"));
    if (cart) {
      alert("one item added");
    } else {
      cart = [
        {
          product,
          quantity: count,
        },
      ];
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  return (
    <div>
      <h2>Cart</h2>
      <h2>Products</h2>
      <button onClick={addToCart}>addItem</button>
    </div>
  );
};

export default CartItems;
