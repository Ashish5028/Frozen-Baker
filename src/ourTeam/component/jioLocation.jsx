import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartData } from "../../user/userSlice";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to add an item to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    dispatch(cartData(cart));
  };

  return (
    <div className="">
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="m-3 w-40 bg-zinc-300">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-indigo-400 rounded-md px-6 py-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="m-3 w-40 bg-zinc-300">
            {item.price}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

// const addToCart = (product) => {
//   const updatedCart = product;
//   setCart(updatedCart);
//   dispatch(cartData(cart));
// };
