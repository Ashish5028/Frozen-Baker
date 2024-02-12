import React from "react";
import "./addressPage.css";
import { Link } from "react-router-dom";

export default function AddressPage() {
  const handlechange = () => {};
  return (
    <>
      <div className=" flex   justify-center   align-middle  text-textColor">
        <div className=" bg-white w-1/2 p-5 border border-inherit shadow-md">
          <h1 className="text-3xl pl-8 font-heading text-bgColor">
            ORDER & DELIVERY DETAILS
          </h1>
          <h1 className="text-xl px-8 pt-4"> ADD DELIVERY ADDRESS</h1>
          <div className=" m-8 bg-stone-200 rounded-md px-2 py-10">
            <div className="pl-5 ">
              <input type="checkbox" class="circle-checkbox" />
              <label for="circleCheckbox" className="pl-2  text-xl">
                Add New Address
              </label>
            </div>
            <div className="grid grid-cols-2 gap-10  px-5 mt-5 ">
              <input
                type="text"
                placeholder="Name"
                name="title"
                className="p-2 rounded-md outline-none  ring-inset ring-zinc-400 ring-1 "
              />
              <input
                type="text"
                placeholder="Mobile No."
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                name="address"
                type="text"
                placeholder="Address"
                className="py-2 outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="text"
                placeholder="Alt Mobile No"
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="email"
                placeholder="Other Email"
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="email"
                placeholder="Landmark"
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
            </div>
            <div className="px-7 py-5 text-lg mt-5">
              <h1 className="font-medium">Address Type</h1>
              <div className=" w-full flex items-center space-x-4 py-4">
                <label className="  pl-1 font-text flex ">
                  <input
                    onChange={handlechange}
                    name="user"
                    type="radio"
                    value="Home"
                    required
                    className="w-4 mx-2"
                  />
                  Home
                </label>
                <label className="text-textColor  pl-1 font-text flex ">
                  <input
                    onChange={handlechange}
                    name="user"
                    type="radio"
                    value="Offilce"
                    required
                    className="w-4 mx-2"
                  />
                  Offilce
                </label>
              </div>
            </div>
            <Link to="/payment">
              <div className="pt-5 pr-4 flex justify-end text-lg text-white">
                <button
                  className="border border-3xl bg-bgColor rounded-md py-2 px-6 "
                  onSubmit="submit"
                >
                  Save & Pay
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
