import { Link } from "react-router-dom";
import { FaArrowTurnDown } from "react-icons/fa6";

import Details from "./details";

export default function ProductUpload() {
  return (
    <div className="px-10 font-heading bg-stone-100 h-full space-y-4  md:h-screen ">
      <p className="flex items-center justify-center text-3xl text-headingColor">
        Page For Upload Products <FaArrowTurnDown />
      </p>
      <div className="grid grid-cols-1 px-10 text-2xl text-white bg-zinc-800 rounded-sm py-2 md:grid-cols-4 ">
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
