import React from "react";
import "./product.css";
export default function ProdctPage() {
  return (
    <div>
      {/* <Header /> */}
      <div className="items-center justify-items-center">
        <span>Product</span>
      </div>
      <div className=" bg-zinc-100 shadow-lg p-3 ">
        <div className=" flex  space-x-4 px-10 ">
          <span className="text-sm  cursor-pointer">Flavour</span>
          <span className="text-sm  cursor-pointer">Catogery</span>
          <span className="text-sm  cursor-pointer">Dessert</span>
        </div>
      </div>
    </div>
  );
}
