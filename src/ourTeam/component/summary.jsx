import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function SummaryMovie() {
  const user = useSelector((state) => state.team.users);
  const param = useParams();
  const { id } = param;
  console.log(id);
  const res = user.filter((ele) => ele.show.id == id);
  console.log(res);

  return (
    <div className="flex justify-center items-center my-5">
      <div className="  rounded-lg  shadow-md ">
        <img
          src={res[0].show.image ? res[0].show.image.medium : "placeholder-url"}
          alt={res[0].show.name}
          className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
        />
        <div>{res[0].show.language}</div>
        <div className=" py-2 cursor-pointer font-medium text-white ">
          <p className=" text-textColor  p-1">{res[0].show.name}</p>

          <button className="text-center items-center w-full bg-bgColor px-4 rounded-sm p-1">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
