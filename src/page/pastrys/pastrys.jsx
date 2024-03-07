import Chocolates from "../../assets/pastrys/pastry1.png";
import apple from "../../assets/pastrys/pastry3.png";
import eggless from "../../assets/pastrys/strawberry.jpg";
import img from "../../assets/pastrys/pastry2.png";
import icon from "../../assets/pastrys/icon3.png";

import { Link } from "react-router-dom";
export function Pastrys() {
  return (
    <div className="bg-white  shadow-md rounded-md py-10 mx-6">
      <div className=" text-3xl justify-center flex items-center font-heading my-3 space-x-2">
        <img src={icon} className=" h-16  " />
        Fresh Pastry
      </div>
      <div className=" grid grid-cols-1 px-14  gap-6 pt-4 md:grid-cols-2">
        <Link to="/pastry">
          <img src={Chocolates} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
        <Link to="/pastry">
          <img src={apple} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
        <Link to="/pastry">
          <img src={eggless} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
        <Link to="/pastry">
          <img src={img} className="rounded-lg h-[350px] w-[600px]" />
        </Link>
      </div>
    </div>
  );
}
