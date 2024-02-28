import { useState } from "react";
import { LuIndianRupee } from "react-icons/lu";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartData = useSelector((state) => state.users.cart);
  console.log(cartData);
  return (
    <div className=" m-10 grid grid-cols-4 gap-4 font-text ">
      {cartData.map((ele) => {
        return (
          <>
            <div>
              <div className="  rounded-lg bg-stone-100 shadow-md">
                <img
                  src={ele[0].imageUrl}
                  className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
                />
                <div className=" py-2 cursor-pointer font-medium text-white ">
                  <p className=" text-textColor  p-1">{ele[0].flavour}</p>
                  <p className=" text-textColor  p-1">{ele[0].name}</p>
                  <p className="text-textColor p-1 flex relative  items-center space-x-2">
                    <LuIndianRupee />
                    {ele[0].price}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CartItems;
