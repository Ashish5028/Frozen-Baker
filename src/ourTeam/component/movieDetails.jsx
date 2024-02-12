import React, { useState } from "react";
import Team from "./team";
import { GoGift } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { TbAlarmSnooze } from "react-icons/tb";

const Page1 = () => (
  <div>
    <Team />
  </div>
);
const Page2 = () => <div>This is Page 2</div>;
const Page3 = () => <div>This is Page 3</div>;

const MyAccount = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  return (
    <div className="font-text h-screen bg-stone-200 text-lg flex text-textColor justify-around px-10">
      <div className="bg-white w-1/4  pt-5 divide-y ">
        <div onClick={() => setCurrentPage("page1")}>
          <div className="flex pl-16 items-center space-x-6 cursor-pointer">
            <GoGift />
            <p>My Orders</p>
          </div>
        </div>
        <div onClick={() => setCurrentPage("page2")}>
          <div className="flex  items-center space-x-6 pl-16">
            <FaUser fontSize="20px" />
            <p>My Profile</p>
          </div>
        </div>
        <div onClick={() => setCurrentPage("page3")}>
          <div className="flex  items-center space-x-5 pl-16">
            <TbAlarmSnooze fontSize="26px" />
            <p>My Remainers</p>
          </div>
        </div>
      </div>

      <div className="w-3/4 bg-white ml-10">
        {currentPage === "page1" && <Page1 />}
        {currentPage === "page2" && <Page2 />}
        {currentPage === "page3" && <Page3 />}
      </div>
    </div>
  );
};

export default MyAccount;
