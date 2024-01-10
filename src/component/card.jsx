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

/*  <div className=" ml-auto pl-32  space-x-7 p-10 ">
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
              <p>{res.group}</p>
            </div>
          );
        })}
        <br />
        <br />
        <br />
      </div>
      */
