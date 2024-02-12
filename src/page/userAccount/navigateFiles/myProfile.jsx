import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

export default function MyProfile() {
  const userData = useSelector((state) => state.users.item);
  return (
    <div>
      <p className="text-center font-heading text-3xl ">My Profile</p>
      <div>
        <div className="flex pl-16 h-10  items-center space-x-6 ">
          {userData.map((res) => {
            return (
              <div className="flex items-center">
                <p>Hiii,</p>
                <FaUserCircle fontSize="20px" className="mx-4" />
                <div className="pl-4"> {res.data.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
