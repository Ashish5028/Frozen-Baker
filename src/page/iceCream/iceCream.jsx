import icon from "../../assets/iceCreams/icon1.jpg";
import splash from "../../assets/iceCreams/360.jpg";
import cadbury from "../../assets/iceCreams/1077.jpg";
import choco from "../../assets/iceCreams/colorful.avif";
import chocolate from "../../assets/iceCreams/grop.jpg";
import butter from "../../assets/iceCreams/ice.png";

import { Link } from "react-router-dom";
export function IceCreams() {
  return (
    <div className="bg-white  shadow-md rounded-md py-10 mx-6">
      <div className=" text-3xl justify-center flex items-center font-heading  space-x-2">
        <img src={icon} className=" h-16  " />
        Ice-Creams
      </div>
      <div className=" grid grid-cols-1 px-14  gap-6 pt-4 md:grid-cols-2">
        <Link to="/icecreams">
          <img src={splash} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
        <Link to="/icecreams">
          <img src={cadbury} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
        <Link to="/icecreams">
          <img src={butter} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
        <Link to="/icecreams">
          <img src={choco} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
      </div>
    </div>
  );
}
