import service from "../../assets/service-2.jpg";
import down from "../../assets/down.jpg";
import about from "../../assets/about.jpg";
export default function ImagePage() {
  return (
    <>
      <div className=" relative h-full mx-10  ">
        <div className=" absolute left-40 top-28 h-72 w-56  rounded-md ">
          <img src={about} alt="" className="rounded-md" />
        </div>
        <div className=" m-10  absolute inset-0  rounded-md h-72 w-56 ">
          <img src={down} alt="" className="rounded-md" />
        </div>
        <div className="  absolute bottom-0 right-10 h-72 w-56 ">
          <img src={service} alt="" className="rounded-md" />
        </div>
      </div>
    </>
  );
}
