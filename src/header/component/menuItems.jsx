import { Link } from "react-router-dom";

export default function MenuItems() {
  return (
    <>
      <div className="flex space-x-5 mt-2 font-text ">
        <p className="text-white hover:text-headingColor">
          <Link to="/">Home</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="team">Team</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="product">Cake</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="cupcake">Cup Cake</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="service">Service</Link>
        </p>
      </div>
    </>
  );
}
