import { Data } from "./data";
import "../index.css";
import cake from "../assets/cake.jpg";
export default function Card() {
  return (
    <>
      <div className=" ml-auto pl-32  space-x-7 p-10 ">
        {Data.map((res) => {
          return (
            <div className="float-left border   bg-slate-200 rounded-md w-72  items-center  ">
              <p className="text-center items-center justify-center">
                {res.exp}
              </p>
              <p className="text-center items-center justify-center">
                {res.logo}
              </p>
              <p className="text-center items-center justify-center">
                {res.year}
              </p>
              <img src={cake} className="rounded-md " />
            </div>
          );
        })}
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
