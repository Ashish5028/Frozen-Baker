import { useSelector } from "react-redux";
import { GoGift } from "react-icons/go";
import { TbAlarmSnooze } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./myAccount.css";
import ChangePassword from "../navigateFiles/changePassword";
export default function MyAccount() {
  const userData = useSelector((state) => state.users.item);
  const navigate = useNavigate();
  const password = () => {
    <ChangePassword />;
  };

  return (
    <div className="font-text h-screen bg-stone-200 text-lg flex justify-around px-10">
      <div className=" bg-white w-1/4  pt-5 divide-y ">
        <div className="flex pl-16 h-16 bg-bgColor items-center space-x-6 text-white">
          {userData.map((res) => {
            return (
              <div className="flex items-center">
                <FaUserCircle fontSize="20px" />
                <div className="pl-4"> {res.data.name}</div>
              </div>
            );
          })}
        </div>
        <Link to="/my-order" className="linkCss">
          <div className="flex pl-16 items-center space-x-6 ">
            <GoGift />
            <p>My Orders</p>
          </div>
        </Link>
        <Link to="/my-profile" className="linkCss">
          <div className="flex  items-center space-x-6 pl-16">
            <FaUser fontSize="20px" />
            <p>My Profile</p>
          </div>
        </Link>
        <Link to="/my-remainder" className="linkCss">
          <div className="flex  items-center space-x-6 pl-16">
            <TbAlarmSnooze fontSize="26px" />
            <p>My Remainers</p>
          </div>
        </Link>
        <Link to="/voucher" className="linkCss">
          <div className="flex  items-center space-x-6 pl-16 ">
            <MdLocalOffer fontSize="20px" />
            <p>Gift Vouchers</p>
          </div>
        </Link>
        <Link to="/address" className="linkCss">
          <div className="flex  items-center space-x-6 pl-16 ">
            <FaRegAddressCard fontSize="20px" />
            <p>Save Addresses</p>
          </div>
        </Link>
        <Link className="linkCss">
          <div id="password" className="flex  items-center space-x-6 pl-16 ">
            <MdLock fontSize="20px" />
            <button onClick={password}>Change Password</button>
          </div>
        </Link>
      </div>
      <div className="w-3/4 bg-white ml-10">
        {password ? null : <ChangePassword />}
      </div>
    </div>
  );
}
