import { Data } from "./data";
import "../index.css";
import cake from "../assets/cake.jpg";
export default function Card() {
  return (
    <>
      <div className="Card flex justify-between p-20  ">
        <div className=" h-64 w-72 bg-cardColor rounded-md  transition ease-out delay-150 hover:duration-500  hover:shadow-xl hover:-translate-y-2 hover:bg-cardbgColor"></div>
        <div className=" h-64 w-72 bg-cardColor rounded-md  transition ease-out delay-150  hover:duration-500  hover:shadow-xl hover:-translate-y-2 hover:bg-cardbgColor"></div>
        <div className="h-64 w-72 bg-cardColor rounded-md  transition ease-out delay-150  hover:duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-cardbgColor"></div>
        <div className="h-64 w-72 bg-cardColor rounded-md  transition ease-out delay-150  hover:duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-cardbgColor"></div>
      </div>
    </>
  );
}
