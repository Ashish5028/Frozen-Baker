import React from "react";
import "./addressPage.css";

export const AddressPage = () => {
  return (
    <>
      <div className=" flex   justify-center  h-screen  align-middle   ">
        <div className=" bg-white w-2/4 p-5 border border-inherit shadow-md">
          <h1 className="text-2xl pl-8 "> ORDER & DELIVERY DETAILS</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-2xl pl-8"> ADD DELIVERY ADDRESS</h1>
          <div className=" h-100% m-8 bg-yellow-100">
            <div className="pl-5 ">
              <input
                type="checkbox"
                id="circleCheckbox"
                class="circle-checkbox"
              />
              <label for="circleCheckbox" className="pl-2">
                Add New Address
              </label>
            </div>

            <div className="grid grid-cols-2 gap-10  px-5 mt-5">
              <input type="text" placeholder="Name" name="title" />
              <input type="text" placeholder="Mobile No." />
              <input name="address" type="text" placeholder="Address" />
              <input type="text" placeholder="Other Email" />
              <div>
                <h1>Address Type</h1>
                <div className="mt-4">
                  <input
                    type="checkbox"
                    id="circleCheckbox"
                    class="circle-checkbox"
                  />
                  <label for="circleCheckbox" className="p-2">
                    Home
                  </label>
                  <input
                    type="checkbox"
                    id="circleCheckbox"
                    class="circle-checkbox"
                  />
                  <label for="circleCheckbox" className="p-2">
                    Office
                  </label>
                  <input
                    type="checkbox"
                    id="circleCheckbox"
                    class="circle-checkbox"
                  />
                  <label for="circleCheckbox" className="p-2">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="pt-16 pr-4 flex justify-end text-2xl text-white">
              <span className="border border-3xl bg-conColor ">
                SAVE & DELIVER HERE
              </span>
            </div>
          </div>
          <div className=" pl-8 mt-10 text-2xl text-white">
            <span className="border border-5xl bg-slate-400">
              PROCEED TO PAY
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
