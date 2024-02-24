import { useSelector } from "react-redux";
import { GoGift } from "react-icons/go";
import { TbAlarmSnooze } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdInventory, MdLock } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./myAccount.css";
import { useEffect, useState } from "react";
import Team from "../../../ourTeam/component/team";
import MyOrder from "../navigateFiles/myOrder";
import MyProfile from "../navigateFiles/myProfile";
import MyRemainder from "../navigateFiles/myRemainder";
import GiftVoucher from "../navigateFiles/gifts";
import SaveAddress from "../navigateFiles/saveAddress";
import ChangePassword from "../navigateFiles/changePassword";

const Page1 = () => (
  <div>
    <MyOrder />
  </div>
);
const Page2 = () => (
  <div>
    <MyProfile />
  </div>
);
const Page3 = () => (
  <div>
    <MyRemainder />
  </div>
);
const Page4 = () => (
  <div>
    <GiftVoucher />
  </div>
);
const Page5 = () => (
  <div>
    <SaveAddress />
  </div>
);
const Page6 = () => (
  <div>
    <ChangePassword />
  </div>
);

export default function MyAccount() {
  const [user, setUser] = useState();
  const [currentPage, setCurrentPage] = useState("My Profile");

  useEffect(() => {
    let user = localStorage.getItem("User");
    setUser(user);
  }, []);
  // console.log(user);
  return (
    <div className="font-text h-screen bg-stone-200 text-lg flex text-textColor justify-around px-10">
      <div className=" bg-white w-1/4  pt-5 divide-y ">
        <div className="flex pl-16 h-16 bg-bgColor items-center space-x-6 text-white">
          <div className="flex items-center">
            <FaUserCircle fontSize="20px" />
            <div className="pl-4"> {user}</div>
          </div>
        </div>
        <div
          className="flex pl-16 items-center space-x-6 linkCss "
          onClick={() => setCurrentPage("My-Order")}
        >
          <MdInventory fontSize="20px" />
          <p>My Orders</p>
        </div>
        <div
          className="flex  items-center space-x-6 pl-16 linkCss"
          onClick={() => setCurrentPage("My Profile")}
        >
          <FaUser fontSize="20px" />
          <p>My Profile</p>
        </div>

        <div
          className="flex  items-center space-x-5 pl-16 linkCss"
          onClick={() => setCurrentPage("My Remainers")}
        >
          <TbAlarmSnooze fontSize="26px" />
          <p>My Remainers</p>
        </div>

        <div
          className="flex  items-center space-x-6 pl-16 linkCss  "
          onClick={() => setCurrentPage("Gift Vouchers")}
        >
          <MdLocalOffer fontSize="20px" />
          <p>Gift Vouchers</p>
        </div>

        <div
          className="flex  items-center space-x-6 pl-16 linkCss  "
          onClick={() => setCurrentPage("Save Addresses")}
        >
          <FaRegAddressCard fontSize="20px" />
          <p>Save Addresses</p>
        </div>

        <div
          className="flex  items-center space-x-6 pl-16 linkCss  "
          onClick={() => setCurrentPage("Change Password")}
        >
          <MdLock fontSize="20px" />
          <button onClick={() => password}>Change Password</button>
        </div>
      </div>
      <div className="w-3/4 bg-white ml-10">
        <div className="p-5">
          {currentPage === "My-Order" && <Page1 />}
          {currentPage === "My Profile" && <Page2 />}
          {currentPage === "My Remainers" && <Page3 />}
          {currentPage === "Gift Vouchers" && <Page4 />}
          {currentPage === "Save Addresses" && <Page5 />}
          {currentPage === "Change Password" && <Page6 />}
        </div>
      </div>
    </div>
  );
}
