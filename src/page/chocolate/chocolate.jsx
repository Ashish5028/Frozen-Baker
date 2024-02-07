import choco from "../../assets/chocolates/57895.webp";
import cadbury from "../../assets/chocolates/cadbury.jpg";
import splash from "../../assets/chocolates/splash.avif";
import chocolate from "../../assets/chocolates/chocolate.jpg";
import icon from "../../assets/chocolates/icon.jpg";

import { Link } from "react-router-dom";
export function Chocolates() {
  return (
    <div className="bg-white  shadow-md rounded-md py-10 mx-6">
      <div className=" text-3xl justify-center flex items-center font-heading  space-x-2">
        <img src={icon} className=" h-16 rounded-full " />
        Fresh Pastry
      </div>
      <div className=" grid grid-cols-2 px-14  gap-6 pt-4">
        <Link to="/api/bestseller">
          <img src={splash} className="rounded-lg h-[250px] w-[600px]" />
        </Link>
        <Link to="/api/dayseller">
          <img src={cadbury} className="rounded-lg h-[250px] w-[600px]" />
        </Link>
        <Link to="/api/midnight">
          <img src={chocolate} className="rounded-lg h-[250px] w-[600px]" />
        </Link>
        <Link to="/api/brandnew">
          <img src={choco} className="rounded-lg h-[250px] w-[600px]" />
        </Link>
      </div>
    </div>
  );
}
