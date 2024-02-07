import React from "react";

export const AddressPage = () => {
  return (
    <>
      <div className=" flex   justify-center  h-screen  align-middle   ">
        <div className=" bg-white w-2/4 p-5 border border-inherit ">
          <h1 className="text-2xl pl-8 "> ORDER & DELIVERY DETAILS</h1>
          <h1 className="text-2xl pl-8"> ADD DELIVERY ADDRESS</h1>
          <div className="border border-black h-1/2 m-8 bg-yellow-200">
            <label class="container">
              <input type="checkbox" checked="checked" />
              <span class="checkmark">Add New Address</span>
            </label>
            <div className="grid grid-cols-2 gap-10  px-5 mt-5">
              <input type="text" placeholder="Name" name="title" />

              <input type="text" placeholder="Mobile No."></input>

              <input name="address" type="text" placeholder="Address"></input>
              <input type="text" placeholder="Other Email"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
