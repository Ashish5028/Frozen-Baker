import { FaUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { MdInventory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginItems() {
  return (
    <div className="grid grid-cols-1 divide-y ">
      <Link to="/user/signin">
        <div className=" px-6  items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
          <FaUserCircle fontSize="large" />
          <p className="px-3">Login/Register</p>
        </div>
      </Link>
      <Link to="/upload/product/details">
        <div className=" px-6  items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
          <FaUser fontSize="medium" />
          <p className="px-3">My Account</p>
        </div>
      </Link>
      <Link to="/">
        <div className="px-6  items-center py-2  flex   text-gray-700 hover:bg-zinc-200">
          <IoMdCall fontSize="large" />
          <p className="px-3"> Contact Us</p>
        </div>
      </Link>
      <Link to="myorder">
        <div className=" px-6   items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
          <MdInventory fontSize="medium" />
          <p className="px-3"> My Order</p>
        </div>
      </Link>
      <Link to="logout">
        <div className=" px-6  items-center py-2  flex   text-gray-700 hover:bg-zinc-200">
          <HiOutlineLogout fontSize="large" />
          <p className="px-3">Logout</p>
        </div>
      </Link>
    </div>
  );
}
