import { FaUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { RiCake3Line } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { MdInventory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export function LoginItems() {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const data = useSelector((state) => state.users.user);

  useEffect(() => {
    let store = localStorage.getItem("User");
    setName(store);
    let Catogery = localStorage.getItem("Catogery");
    setCategory(Catogery);
  });
  const logoutUser = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="grid grid-cols-1 divide-y ">
      {name ? null : (
        <Link to="/login/register">
          <div className=" px-6  items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
            <FaUserCircle fontSize="large" />
            <p className="px-3">Login/Register</p>
          </div>
        </Link>
      )}
      {name && (
        <Link to="/my-account">
          <div className=" px-6  items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
            <FaUserCircle fontSize="large" />
            <p className="px-3">My Account</p>
          </div>
        </Link>
      )}
      {category === "Seller" && (
        <Link to="/upload">
          <div className=" px-6  items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
            <RiCake3Line fontSize="large" />
            <p className="px-3">Upload Product</p>
          </div>
        </Link>
      )}
      {category === "Seller" ? (
        <Link to="/">
          <div className="px-6  items-center py-2  flex   text-gray-700 hover:bg-zinc-200">
            <IoMdCall fontSize="large" />
            <p className="px-3"> Contact Us</p>
          </div>
        </Link>
      ) : null}
      <Link to="myorder">
        <div className=" px-6   items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
          <MdInventory fontSize="medium" />
          <p className="px-3"> My Order</p>
        </div>
      </Link>
      <div>
        {name ? (
          <div className=" px-6  items-center py-2  flex   text-gray-700 hover:bg-zinc-200">
            <HiOutlineLogout fontSize="large" />
            <button className="px-3" onClick={logoutUser}>
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
