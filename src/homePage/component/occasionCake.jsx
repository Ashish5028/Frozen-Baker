import momCake from "../../assets/occasionCake/momcake.avif";
import birthday from "../../assets/occasionCake/birthday.avif";
import wedding from "../../assets/occasionCake/wedding-cake.jpg";
import valentines from "../../assets/occasionCake/valentins-day.webp";
import { Link } from "react-router-dom";
export default function OccasionCake() {
  return (
    <div className="bg-white  shadow-md rounded-md py-3 mx-6">
      <p className="text-3xl flex justify-center font-heading my-5">
        Cakes by Occasion
      </p>
      <div className="grid grid-cols-1 gap-5 px-14  md:grid-cols-4">
        <Link to="/api/momCake">
          <img src={momCake} className="rounded-lg ease-in shadow-md" />
          <p className="text-center text-xl py-3">Mother's Day Cakes</p>
        </Link>
        <Link to="/api/wedding">
          <img src={wedding} className="rounded-lg" />
          <p className="text-center text-xl py-3">Wedding Cake</p>
        </Link>
        <Link to="/api/valentines">
          <img src={valentines} className="rounded-lg" />
          <p className="text-center text-xl py-3">Valentine's Cake</p>
        </Link>
        <Link to="/api/birthday">
          <img src={birthday} className="rounded-lg" />
          <p className="text-center text-xl py-3">Birthday Cake </p>
        </Link>
      </div>
    </div>
  );
}
