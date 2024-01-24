import React from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PersonPinIcon from "@mui/icons-material/PersonPin";
export function Header() {
  return (
    <>
      <div className="fixed z-20  w-screen p-3 bg-navBar">
        {/* laptop */}
        <div className="hidden md:flex w-full items-start-center justify-between">
          <div className="flex item-center gap-2">
            <p className="text-yellow-500 text-3xl font-bold  font-serif">
              <span className="px-1 ">Frozen</span>Baker
            </p>
          </div>
          <div className=" flex  gap-4">
            <ul className="flex items-center justify-center gap-5 ">
              <li className="text-sm text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                <Link to="/"> Home</Link>
              </li>
              <li className="text-sm text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                <Link to="/product">Product</Link>
              </li>
              <li className="text-sm text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                <Link to="/team"> Our Team</Link>
              </li>
              <li className="text-sm text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                <Link to="/service">Service</Link>
              </li>
              <li className="text-sm text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center  text-yellow-300 pr-6 cursor-pointer">
            <AddIcCallIcon />
            <span className="text-sm text-white pr-2"> +911234567892</span>
            <Link to="/register">
              <PersonPinIcon
                fontSize="large"
                className="items-center justify-center bottom-3 "
              />
            </Link>
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
              Products
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
}
