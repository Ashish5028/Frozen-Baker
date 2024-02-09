import { Link } from "react-router-dom";
import tempting from "../../assets/freshCake/Tempting.webp";
import butter from "../../assets/freshCake/butter.webp";
import flower from "../../assets/freshCake/Flowers.webp";
import pine from "../../assets/freshCake/pineapple.webp";
import truffle from "../../assets/freshCake/Truffle.webp";
import red from "../../assets/freshCake/Red-Velvet.webp";
import fruit from "../../assets/freshCake/Fresh-Fruit.webp";
import vanila from "../../assets/freshCake/Vanila.webp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getButterScotchData } from "../../product/productSlice";

export default function FreshCake() {
  return (
    <div className="bg-white  shadow-md rounded-md py-3 mx-6">
      <p className="text-3xl pl-14 font-heading my-5">Bakery-Fresh Cakes</p>
      <div className="grid grid-cols-4 gap-5 px-14  ">
        <Link to="/chocolate">
          <img src={tempting} className="rounded-lg ease-in shadow-md" />
          <p className="text-center text-xl py-3">Chocolate Cake</p>
        </Link>
        <Link to="/butterscotch">
          <img src={butter} className="rounded-lg" />
          <p className="text-center text-xl py-3">Butterscotch Cake</p>
        </Link>
        <Link to="/pineapple">
          <img src={pine} className="rounded-lg" />
          <p className="text-center text-xl py-3">Pineapple Cake</p>
        </Link>
        <Link to="/flowerscake">
          <img src={flower} className="rounded-lg" />
          <p className="text-center text-xl py-3">Flowers & Cake</p>
        </Link>
        <Link to="/truffle">
          <img src={truffle} className="rounded-lg" />
          <p className="text-center text-xl py-3">Truffle Cakes</p>
        </Link>
        <Link to="/redvelvet">
          <img src={red} className="rounded-lg" />
          <p className="text-center text-xl py-3">Red Velvet Cake</p>
        </Link>
        <Link to="/fruit">
          <img src={fruit} className="rounded-lg" />
          <p className="text-center text-xl py-3">Fruit Cake</p>
        </Link>
        <Link to="/vanila">
          <img src={vanila} className="rounded-lg" />
          <p className="text-center text-xl py-3">Vanila Cake</p>
        </Link>
      </div>
    </div>
  );
}
