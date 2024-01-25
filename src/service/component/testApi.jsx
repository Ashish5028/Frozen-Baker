import { useState, useEffect } from "react";
import { FaTshirt, FaCartPlus } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

import Card from "../../component/card";
const TestApi = () => {
  return (
    <div className="flex  h-screen px-20">
      <div className=" w-1/2 bg-cyan-300 pl-10">
        <h1 className="text-bgColor">//OUR SERVICE</h1>
        <br />
        <p className="text-4xl">What Do We Offer For You ?</p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          exercitationem culpa debitis eligendi aliquid consectetur,
          <br />
          placeat in officia nemo hic?
        </p>
        <div className="flex justify-around ">
          <FaTshirt className="h-10 w-10 bg-yellow-500 text-white rounded-full border p-2" />
          <h1 className="">Quality Products</h1>
          <BsCake2 className="h-10 w-10 bg-yellow-500 text-white rounded-full border p-2" />
          <h1>Custom Products</h1>
        </div>
        <div className=" grid grid-cols-2 gap-4 place-content-around ">
          <FaCartPlus className="h-10 w-10 bg-yellow-500 text-white rounded-full border p-2" />
          <TbTruckDelivery className="h-10 w-10 bg-yellow-500 text-white rounded-full border p-2" />
        </div>
      </div>
      <div className="w-1/2 bg-yellow-100">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quidem
          quae ipsum debitis facilis hic vel dignissimos veritatis voluptatem.
          Odit optio vitae, veniam eius cumque corrupti dolore quidem magni
          sapiente!
        </p>
      </div>
    </div>
  );
};
export default TestApi;
