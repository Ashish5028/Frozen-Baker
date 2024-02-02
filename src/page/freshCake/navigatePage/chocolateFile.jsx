import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import { MdLocalShipping } from "react-icons/md";
import { LiaGiftSolid } from "react-icons/lia";
import { FaRegSmile } from "react-icons/fa";
import ProductPage from "../../../product/components/productPage";

export const ChocolateFile = () => {
  return (
    <>
      <div className="h-8 bg-white">
        <ul className="flex justify-around">
          <li className="flex items-center gap-2 ">
            <CiAlarmOn fontSize="large" /> 2 Hours Delivery
          </li>
          <li className="flex items-center gap-2">
            <MdLocalShipping fontSize="large" /> Free Shipping
          </li>
          <li className="flex items-center gap-2">
            <LiaGiftSolid fontSize="large" /> Thousand + Gifts
          </li>
          <li className="flex items-center gap-2">
            <FaRegSmile fontSize="large" /> Million Happy Customers
          </li>
        </ul>
      </div>

      <div className="   ml-8">
        <h1 className="text-2xl  "> Decadent Chocolate Cake</h1>
      </div>
      <ProductPage />
    </>
  );
};
