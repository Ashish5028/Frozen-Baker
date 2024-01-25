import { Link } from "react-router-dom";
import "./app.css";
export default function MenuItems() {
  return (
    <>
      <div className="flex space-x-5 mt-2">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="team">Team</Link>
        </p>
        <p>
          <Link to="product">Product</Link>
        </p>
        <p>
          <Link to="team">OurTeam</Link>
        </p>
        <p>
          <Link to="service">Service</Link>
        </p>
      </div>
    </>
  );
}
