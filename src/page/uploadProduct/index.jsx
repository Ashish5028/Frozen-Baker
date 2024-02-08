import { Link } from "react-router-dom";
import { FaArrowTurnDown } from "react-icons/fa6";

import Details from "./details";

export default function ProductUpload() {
  return (
    <div className="px-10 font-heading bg-stone-100 h-screen space-y-4">
      <p className="flex items-center justify-center text-3xl text-headingColor">
        Page For Upload Products <FaArrowTurnDown />
      </p>
      <div className="flex justify-around text-2xl text-white bg-zinc-800 rounded-sm py-2">
        <Link to="/cakeupload" className="hover:text-headingColor">
          UploadCake
        </Link>
        <Link to="/icecreamupload" className="hover:text-headingColor">
          UploadIcecream
        </Link>
        <Link to="/pastryupload" className="hover:text-headingColor">
          UploadPastry
        </Link>
        <Link to="/chocolateupload" className="hover:text-headingColor">
          UploadChocolate
        </Link>
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
}
