import backerImage from "../assets/baker.png";
import cakeImage from "../assets/cake.jpg";
import cakekaImage from "../assets/cakeskaphoto.jpg";
import service from "../assets/service-2.jpg";
import down from "../assets/down.jpg";
import about from "../assets/about.jpg";
export default function AboutPage() {
  return (
    <>
      <div className="flex justify-around text-slate-600">
        <div className=" relative h-full mx-4 ">
          <div className=" absolute left-10 top-10 h-72 w-56 rounded-md ">
            <img src={down} alt="" className="rounded-md" />
          </div>
          <div className=" m-32 ml-auto absolute inset-0  rounded-md h-72 w-56 ">
            <img src={about} alt="" className="rounded-md" />
          </div>
          <div className="  absolute bottom-10 right-0 h-72 w-56 ">
            <img src={service} alt="" className="rounded-md" />
          </div>
        </div>

        <div className=" p-5">
          <div className=" text-yellow-600 text-xl pt-4">//ABOUT US</div>
          <div className=" text-black text-2xl pt-4">
            We Bake Every Item From <br />
            The Core Of Our Hearts
          </div>
          <div>
            Tempor erat elitr rebum at clita. Diam dolor diam
            <br /> ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
            <br /> et lorem et sit, sed stet lorem sit clita duo justo magna
            dolore erat amet
          </div>
          <br />

          <div>
            Tempor erat elitr rebum at clita. Diam dolor diam
            <br /> ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
            <br /> et lorem et sit, sed stet lorem sit clita duo justo magna
            dolore erat amet
          </div>
          <br />
          <div className="flex items-center gap-4">
            <div>Quality Products</div>
            <div>Custom Products</div>
          </div>
          <br />
          <div className="flex items-center gap-4">
            <div>Home Delivery</div>
            <div>Online Order</div>
          </div>

          <button className="text-white px-8 py-3 bg-yellow-700 rounded-full my-5 hover:bg-yellow-600">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
