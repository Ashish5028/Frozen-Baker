import React from "react";
import "./style.css";
const ProductItem = ({ item }) => {
  const { id, name, price, img } = item;
  return (
    <div className="">
      <img src={img} alt="item" />
      <p className="text-center text-2xl">{name}</p>

      <div className=" flex justify-around">
        <span>${price}</span>
        <button className="rounded-2xl">Add +</button>
      </div>
    </div>
  );
};

export default ProductItem;
