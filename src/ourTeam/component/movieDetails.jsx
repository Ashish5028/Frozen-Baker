import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

const Product = ({ id, name, price, addToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>
        Add to Cart
      </button>
    </div>
  );
};

const Cart = ({ items }) => {
  // Calculate total count of all products in the cart
  const totalCount = items.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div>
      <h2 className="bg-bgColor flex">
        Cart
        <FaCartArrowDown fontSize="20px" />
      </h2>
      <div className="ml-16 px-2 rounded-full bg-rose-400 w-8 text-lg relative bottom-10">
        {totalCount} {totalCount === 1}
      </div>
      <ul>
        {items.map((item) => (
          <div className="flex">
            <div className="w-1/2"></div>
            <li key={item.id} className="bg-red-300">
              {item.name} - {item.count}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const AppDetails = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        <Product id={1} name="Product 1" price={10} addToCart={addToCart} />
        <Product id={2} name="Product 2" price={20} addToCart={addToCart} />
        <Product id={3} name="Product 3" price={30} addToCart={addToCart} />
      </div>
      <Cart items={cartItems} />
    </div>
  );
};

export default AppDetails;
