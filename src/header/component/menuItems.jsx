import { Link } from "react-router-dom";
import "./app.css";
export default function MenuItems() {
  return (
    <>
      <div className="flex space-x-5 mt-2 font-text ">
        <Link to="/" className="manuItems">
          Home
        </Link>
        <Link to="team" className="manuItems">
          Team
        </Link>
        <Link to="product" className="manuItems">
          Cakes
        </Link>
        <Link to="/pastry" className="manuItems">
          Pastrys
        </Link>
        <Link to="/chocolate" className="manuItems">
          Chocolates
        </Link>
        <Link to="/icecreams" className="manuItems">
          IceCream
        </Link>
        <Link to="/service" className="manuItems">
          Service
        </Link>
      </div>
    </>
  );
}
