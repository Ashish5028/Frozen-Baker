import React from "react";
import { Link } from "react-router-dom";

export default function AddressPage() {
  const handlechange = () => {};
  const FromSubmit = () => {};
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
              <label for="circleCheckbox" className="pl-2  text-lg">
                Add New Address
              </label>
            </div>
            <form
              className="grid grid-cols-2 gap-10  px-5 mt-5 "
              onSubmit={FromSubmit}
            >
              <input
                type="text"
                required
                placeholder="Name"
                name="name"
                className="p-2 rounded-md outline-none  ring-inset ring-zinc-400 ring-1 "
              />
              <input
                type="number"
                name="mobile no"
                required
                placeholder="Mobile No."
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                name="address"
                type="text"
                required
                placeholder="Address"
                className="py-2 outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="number"
                name="number"
                required
                placeholder="Alt Mobile No"
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="text"
                name="landmark"
                required
                placeholder="Landmark"
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Other email"
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />

              <div className=" text-lg ">
                <h1 className="font-medium">Address Type</h1>
                <div className=" w-full flex items-center space-x-4">
                  <label className="  pl-1 font-text flex py-2">
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
              <div></div>
              <div></div>
              <button
                className="border border-3xl bg-bgColor text-white rounded-md py-2 px-6 "
                onSubmit="submit"
              >
                Save & Pay
              </button>
            </form>
          </div>
          <Link to="/payment">
            <div className="pt-5 pr-4 flex justify-end text-lg text-white">
              <button
                className="border border-3xl bg-bgColor rounded-md py-2 px-16 "
                onSubmit="submit"
              >
                Pay
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
