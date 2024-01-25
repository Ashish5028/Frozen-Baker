import cake from "../../assets/baker.png";
import service from "../../assets/service-2.jpg";
import down from "../../assets/down.jpg";
import about from "../../assets/about.jpg";
export default function ImagePage() {
  return (
    <>
      <div className=" relative h-full mx-4 ">
        <div className=" absolute left-10 top-10 h-72 w-56 rounded-md ">
          <img src={down} alt="" className="rounded-md" />
        </div>
        <div className=" m-44  absolute inset-0  rounded-md h-72 w-56 ">
          <img src={about} alt="" className="rounded-md" />
        </div>
        <div className="  absolute bottom-10 right-10 h-72 w-56 ">
          <img src={service} alt="" className="rounded-md" />
        </div>
      </div>
    </>
  );
}
