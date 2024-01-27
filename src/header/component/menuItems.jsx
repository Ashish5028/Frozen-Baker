import { Link } from "react-router-dom";

export default function MenuItems() {
  return (
    <>
      <div className="flex space-x-5 mt-2 italic text-sm">
        <p className="text-white hover:text-headingColor">
          <Link to="/">Home</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="team">Team</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="product">Product</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="team">OurTeam</Link>
        </p>
        <p className="text-white hover:text-headingColor">
          <Link to="service">Service</Link>
        </p>
      </div>
    </>
  );
}
