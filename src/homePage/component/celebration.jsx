import { Link } from "react-router-dom";
import Anniversary from "../../assets/Anniversary1.webp";
import Birthday from "../../assets/Birthday.jpg";
export function CelebrationPage() {
  return (
    <>
      <div className="bg-white  shadow-md rounded-md py-3 mx-6">
        <p className="text-3xl pl-14 font-heading my-5">
          Celebrate Special Occasions
        </p>
        <div className="grid grid-cols-1 gap-5 px-14  md:grid-cols-2">
          <Link to="/api/birthday">
            <img src={Birthday} className="rounded-lg ease-in shadow-md" />
            <p className="text-center text-xl py-3">Birthday</p>
          </Link>
          <Link to="/api/anniversary">
            <img src={Anniversary} className="rounded-lg" />
            <p className="text-center text-xl py-3">Anniversary</p>
          </Link>
        </div>
      </div>
    </>
  );
}
