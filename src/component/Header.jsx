import React from "react";
import { MdAddIcCall } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className="shadow-md bg-black text-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className=" mx-10 ">
          <div className="flex ">
            <div className="  text-4xl py-4 text-yellow-600 font-bold font-serif">
              Baker
            </div>
            <div className="flex items-center mx-52 space-x-6 ">
              <div className=" text-sm hover:text-yellow-500 duration-100 cursor-pointer transition-all ease-in-out">
                Home
              </div>
              <div className="text-sm hover:text-yellow-500 duration-100 cursor-pointer transition-all ease-in-out">
                About
              </div>
              <div className="text-sm hover:text-yellow-500 duration-100 cursor-pointer transition-all ease-in-out">
                Service
              </div>
              <div className="text-sm hover:text-yellow-500 duration-100 cursor-pointer transition-all ease-in-out">
                Products
              </div>
              <div className="text-sm hover:text-yellow-500 duration-100 cursor-pointer transition-all ease-in-out">
                Contact
              </div>
              <div className="text-sm hover:text-yellow-500 duration-100 cursor-pointer transition-all ease-in-out">
                Order
              </div>
            </div>
            <div className="relative flex items-center justify-center text-yellow-600">
              <MdAddIcCall />
            </div>
            <div className="relative flex items-center justify-center text-xs pl-2">
              +91 1234567892
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Header };
