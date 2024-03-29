import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SaveAddress } from "./addressSlice";

export default function AddressPage() {
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const [user, setUser] = useState();
  const [address, setAddress] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [landmark, setLandmark] = useState();
  const [altnumber, setAltnumber] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setUser(e.target.value);
  };
  const FromSubmit = (e) => {
    e.preventDefault();
    dispatch(
      SaveAddress({ name, email, address, landmark, altnumber, number, user })
    );
  };
  const handleClick = () => {
    if (address.trim() !== "") {
      setIsAddressSaved(true);
    }
    alert("address is save");
  };
  const pay = () => {
    navigate("/payment");
  };
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
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-md outline-none  ring-inset ring-zinc-400 ring-1 "
              />
              <input
                type="number"
                name="mobile no"
                required
                placeholder="Mobile No."
                onChange={(e) => setNumber(e.target.value)}
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                name="address"
                type="text"
                required
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                className="py-2 outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="number"
                name="alt-number"
                required
                placeholder="Alt Mobile No"
                onChange={(e) => setAltnumber(e.target.value)}
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="text"
                name="landmark"
                required
                placeholder="Landmark"
                onChange={(e) => setLandmark(e.target.value)}
                className="outline-none p-2 rounded-md ring-inset ring-zinc-400 ring-1"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Other email"
                onChange={(e) => setEmail(e.target.value)}
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
                onClick={handleClick}
              >
                Save Your Address
              </button>
            </form>
          </div>
          <div className="mt-5 pr-4 float-right text-lg text-white">
            {isAddressSaved ? (
              <button
                className="border border-3xl bg-bgColor rounded-md py-2 px-16 "
                onClick={pay}
              >
                Pay
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
