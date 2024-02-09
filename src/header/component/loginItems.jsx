import { FaUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { RiCake3Line } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { MdInventory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../user/userSlice";
export default function LoginItems() {
  const naviate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.item);
  const res = data.find((ele) => ele.data.category === "Seller");
  const user = useSelector((state) => state.users.item);
  const name = user[0]?.data.name;

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
        <Link to="/info">
          <div className=" px-6  items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
            <FaUserCircle fontSize="large" />
            <p className="px-3">My Account</p>
          </div>
        </Link>
      )}
      {res && (
        <Link to="/upload">
          <div className=" px-6  items-center py-2  flex  text-gray-700 hover:bg-zinc-200">
            <RiCake3Line fontSize="large" />
            <p className="px-3">Upload Product</p>
          </div>
        </Link>
      )}
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
      <div>
        <div className=" px-6  items-center py-2  flex   text-gray-700 hover:bg-zinc-200">
          <HiOutlineLogout fontSize="large" />
          <button className="px-3">Logout</button>
        </div>
      </div>
    </div>
  );
}
