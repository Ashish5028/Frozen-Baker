import { Button } from "bootstrap";
import "../index.css";
import img from "../assets/cake.jpg";
export default function ImgPage() {
  return (
    <>
      <div className="bgImage">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="items-center justify-center pl-20 space-y-10">
          <p className=" text-yellow-500">// THE BEST BAKERY</p>
          <p className="text-3xl text-white font-light">We Bake With Passion</p>
          <button className="p-3 px-6    text-white rounded-3xl bg-yellow-600">
            Read more
          </button>
        </div>
      </div>
    </>
  );
}
