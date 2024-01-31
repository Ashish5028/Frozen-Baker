import { Link } from "react-router-dom";
import tempting from "../../assets/freshCake/Tempting.webp";
import butter from "../../assets/freshCake/butter.webp";
import flower from "../../assets/freshCake/Flowers.webp";
import pine from "../../assets/freshCake/pineapple.webp";

export default function FreshCake() {
  return (
    <div className="bg-white  shadow-md rounded-md py-3 mx-6">
      <p className="text-3xl pl-14 font-heading my-5">Bakery-Fresh Cakes</p>
      <div className="grid grid-cols-4 gap-5 px-14  ">
        <Link to="/api/birthday">
          <img src={tempting} className="rounded-lg ease-in shadow-md" />
          <p className="text-center text-xl py-3">Chocolate Cake</p>
        </Link>
        <Link to="/api/anniversary">
          <img src={butter} className="rounded-lg" />
          <p className="text-center text-xl py-3">Butterscotch Cake</p>
        </Link>
        <Link to="/api/anniversary">
          <img src={pine} className="rounded-lg" />
          <p className="text-center text-xl py-3">Pineapple Cake</p>
        </Link>
        <Link to="/api/anniversary">
          <img src={flower} className="rounded-lg" />
          <p className="text-center text-xl py-3">Flowers & Cake</p>
        </Link>
      </div>
    </div>
  );
}
