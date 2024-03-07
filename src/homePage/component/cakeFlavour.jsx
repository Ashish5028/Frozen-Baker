import { Link } from "react-router-dom";
import bestSeller from "../../assets/freshFlavour/Bestseller.webp";
import day from "../../assets/freshFlavour/day.webp";
import mid from "../../assets/freshFlavour/mid.webp";
import mid1 from "../../assets/freshFlavour/New.webp";

export function CakeFlavour() {
  return (
    <div className="bg-white  shadow-md rounded-md py-3 mx-6">
      <p className="text-center text-3xl font-heading py-10 space-x-2">
        Cake : Fresh & Flavour
      </p>
      <div className=" grid grid-cols-1 px-14  gap-6 md:grid-cols-2">
        <Link to="/api/bestseller">
          <img src={bestSeller} className="rounded-lg h-52 md:h-full" />
        </Link>
        <Link to="/api/dayseller">
          <img src={day} className="rounded-lg h-52  md:h-full" />
        </Link>
        <Link to="/api/midnight">
          <img src={mid} className="rounded-lg h-52  md:h-full" />
        </Link>
        <Link to="/api/brandnew">
          <img src={mid1} className="rounded-lg h-52 md:h-full" />
        </Link>
      </div>
    </div>
  );
}
