import React from "react";
import { MdAddIcCall } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className="fixed z-20  w-screen p-4 bg-bgColor">
        {/* laptop */}
        <div className="hidden md:flex w-full items-start-center justify-between">
          <div className="flex item-center gap-2">
            <p className="text-headingColor text-xl font-bold  font-serif">
              <span className="px-1">Frozen</span>Baker
            </p>
          </div>
          <div className=" flex  gap-4">
            <ul className="flex items-center justify-center gap-5 ">
              <li className="text-xs text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
              <li className="text-xs text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Menu
              </li>
              <li className="text-xs text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="text-xs text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Service
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center text-headingColor pr-6 cursor-pointer">
            <MdAddIcCall />
            <span className="text-xs text-white "> +911234567892</span>
          </div>
        </div>

        {/* mobile */}
        <div className="flex md:hidden w-full bg-blue-400 px-4">
          <div className="flex item-center ">
            {/* <img src={bakery} className="w-5 h-6" alt="bakery" /> */}

            <p className="text-headingColor text-xl font-semibold  font-serif">
              <span className="px-1">Frozen</span>Baker
            </p>
          </div>
          <ul className="flex items-center ml-auto gap-4 ">
            <li className="text-xs text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-xs text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-xs text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-xs text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

function App() {
  return (
    <div>
      <div className="shadow-md bg-black text-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className=" px-5 ">
          <div className="flex ">
            <div className="text-4xl p-1 w-auto text-yellow-600 font-bold font-serif">
              <span className="px-1">Frozen</span>Baker
            </div>
            <div className="flex items-center mx-auto space-x-4 ">
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
              <span> +91 1234567892</span>
            </div>
            {/* <div className="relative flex items-center justify-center text-xs pl-2">
        +91 1234567892
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
